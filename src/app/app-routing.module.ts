import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PUBLIC_ROUTES, PRIVATE_ROUTES, WILDCARD_ROUTE } from './router';

const routes: Routes = [...PUBLIC_ROUTES, ...PRIVATE_ROUTES, WILDCARD_ROUTE];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules,
    },
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
