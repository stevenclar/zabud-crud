import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateDialogComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
