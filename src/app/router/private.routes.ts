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
          import('@app/pages/private/dashboard/dashboard.module').then(
            (m) => m.DashboardModule,
          ),
      },
    ],
  },
  // {
  //   path: Path.Users,
  //   canActivate: [AuthGuard],
  //   children: [
  //   ],
  // },
];
