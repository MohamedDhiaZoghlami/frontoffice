import { Component, OnInit, Inject, Optional } from '@angular/core';
import{MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
  fromPage!: string;
  fromDialog!: string;

  constructor( public dialogRef: MatDialogRef<DeleteDialogComponent>,
               @Optional() @Inject(MAT_DIALOG_DATA) public mydata: any) { }

  ngOnInit(): void {
    this.fromDialog = "I am from dialog land...";
  }
  /*closeDialog() { this.dialogRef.close({ event: 'close', data: this.fromDialog }); }
  yesDialog() {
    this.dialogRef.close({ event: 'yes-option', data: this.fromDialog });
  }*/

}
