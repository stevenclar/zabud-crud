import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { mergeMap, filter, tap, toArray } from 'rxjs/operators';
import { User, UserService } from './_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  userSubscription!: Subscription;
  users!: User[];
  numberOfEntries!: number;
  userPerPage!: number
  page!: number
  from!: number
  to!: number

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.page = 1;
    this.userPerPage = 5
    this.getUsers()
  }

  getUsers () {
    const users$ = this.userService.getUsers()
    const from = (this.page - 1) * this.userPerPage
    const to = this.page * this.userPerPage
    this.from = from <= 0 ? 0 : from
    this.to = to > this.numberOfEntries? this.numberOfEntries : to
    this.userSubscription = users$
      .pipe(
        tap(users => this.numberOfEntries = users.length),
        mergeMap(user => user),
        filter((_, i) => i >= this.from && i < this.to ),
        toArray(),
        tap(console.log),
      )
      .subscribe(users => {
        this.users = users
      })
  }

  removeUser(userId: number) {
    this.userService.deleteUser(userId)
      .subscribe(() => {
        this.users = this.users.filter(u => u.id !== userId)
      })
  }

  nextPage () {
    this.page += 1;
    this.getUsers()
  }

  prevPage () {
    this.page -= 1;
    this.getUsers()
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe()
  }

}
