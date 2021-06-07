import { Routes } from '@angular/router';
import { NoAuthGuard } from '@core/guards';
import { Path } from '@core/structs';

export const PUBLIC_ROUTES: Routes = [
  {
    path: Path.Home,
    canActivate: [NoAuthGuard],
    loadChildren: () =>
      import('@pages/public/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    canActivate: [NoAuthGuard],
    children: [
      {
        path: Path.SignIn,
        loadChildren: () =>
          import('@app/pages/public/auth/sign-in/sign-in.moule').then(
            (m) => m.SignInModule,
          ),
      },
      {
        path: Path.SignUp,
        loadChildren: () =>
          import('@app/pages/public/auth/sign-up/sign-up.module').then(
            (m) => m.SignUpModule,
          ),
      }
    ],
  },
];
