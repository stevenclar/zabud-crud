import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignInComponent,
        data: {
          title: 'Iniciar Sesión',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class SignInModule {}
