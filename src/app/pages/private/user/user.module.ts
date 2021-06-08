import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { MaterialModule } from './material.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    UserComponent,
    CreateDialogComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
        data: {
          title: 'Users',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
  entryComponents: [
    CreateDialogComponent,
    ConfirmDialogComponent
  ]
})
export class UserModule { }
