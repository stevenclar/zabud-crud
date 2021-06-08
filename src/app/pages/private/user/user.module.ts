import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    UserComponent,
    CreateDialogComponent,
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
    CreateDialogComponent
  ]
})
export class UserModule { }
