import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoDialogComponent } from './demo-dialog/demo-dialog.component';
import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ExpansionPanelPageComponent } from './pages/expansion-panel-page/expansion-panel-page.component';
import { DialogPageComponent } from './pages/dialog-page/dialog-page.component';
import { BottomSheetPageComponent } from './pages/bottom-sheet-page/bottom-sheet-page.component';
import { DemoBottomSheetComponent } from './demo-bottom-sheet/demo-bottom-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoDialogComponent,
    ButtonPageComponent,
    ListPageComponent,
    ExpansionPanelPageComponent,
    DialogPageComponent,
    BottomSheetPageComponent,
    DemoBottomSheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DemoDialogComponent, DemoBottomSheetComponent]
})
export class AppModule { }
