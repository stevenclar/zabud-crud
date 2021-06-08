import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { mergeMap, filter, tap, toArray } from 'rxjs/operators';
import { User, UserService } from './_services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';

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
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.page = 1;
    this.userPerPage = 5
    this.getUsers()
  }

  getUsers() {
    const users$ = this.userService.getUsers()
    const from = (this.page - 1) * this.userPerPage
    const to = this.page * this.userPerPage
    this.from = from <= 0 ? 0 : from
    this.to = to > this.numberOfEntries ? this.numberOfEntries : to
    this.userSubscription = users$
      .pipe(
        tap(users => this.numberOfEntries = users.length),
        mergeMap(user => user),
        filter((_, i) => i >= this.from && i < this.to),
        toArray(),
      )
      .subscribe(users => {
        this.users = users
      })
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(newUser => {
      newUser && this.userService.createUser(newUser)
        .subscribe((createdUser) => {
          createdUser.id = 100
          this.users = [createdUser, ...this.users].slice(0, 5)
        })
    });
  }

  openEditDialog(user: User): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '250px',
      data: user
    });

    dialogRef.afterClosed().subscribe(newUser => {
      newUser && this.userService.updateUser(newUser, user.id)
        .subscribe((updatedUser) => {
          this.users = this.users.map(u => u.id === user.id? {...u, ...updatedUser} : u)
        })
    });
  }

  removeUser(userId: number) {
    this.userService.deleteUser(userId)
      .subscribe(() => {
        this.users = this.users.filter(u => u.id !== userId)
      })
  }

  nextPage() {
    this.page += 1;
    this.getUsers()
  }

  prevPage() {
    this.page -= 1;
    this.getUsers()
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe()
  }

}
