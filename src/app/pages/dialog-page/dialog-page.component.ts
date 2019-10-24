import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DemoDialogComponent } from 'src/app/demo-dialog/demo-dialog.component';

@Component({
  templateUrl: './dialog-page.component.html',
  styleUrls: ['./dialog-page.component.scss']
})
export class DialogPageComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(DemoDialogComponent);
  }

}
