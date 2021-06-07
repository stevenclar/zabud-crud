import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from '@app/@core/structs';
import { AuthService } from '@app/pages/public/auth/_services/auth.service';
import { Observable } from 'rxjs';
// import { AuthService } from '@app/pages/public/auth/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  onClickSignIn(): void {
    this.router.navigate(['/', Path.SignIn]);
  }

  onClickSignOut(): void {
    this.authService.signOut();
    this.router.navigate([Path.Home]);
  }
}
