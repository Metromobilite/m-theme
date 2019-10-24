import { DemoBottomSheetComponent } from './../../demo-bottom-sheet/demo-bottom-sheet.component';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  templateUrl: './bottom-sheet-page.component.html',
  styleUrls: ['./bottom-sheet-page.component.scss']
})
export class BottomSheetPageComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  openBottomSheet() {
    this.bottomSheet.open(DemoBottomSheetComponent, {
      panelClass: 'm-theme'
    });
  }

}
