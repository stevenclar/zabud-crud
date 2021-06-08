import { Routes } from '@angular/router';
import { AuthGuard } from '@core/guards';
import { Path } from '@core/structs';

export const PRIVATE_ROUTES: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: Path.Dashboard,
        loadChildren: () =>
          import('@app/pages/public/home/home.module').then(
            (m) => m.HomeModule,
          ),
      },
    ],
  },
  {
    path: Path.Users,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@app/pages/private/user/user.module').then(
        (m) => m.UserModule,
      ),
  },
];
