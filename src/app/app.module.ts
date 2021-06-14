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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoDialogComponent } from './demo-dialog/demo-dialog.component';
import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ExpansionPanelPageComponent } from './pages/expansion-panel-page/expansion-panel-page.component';
import { DialogPageComponent } from './pages/dialog-page/dialog-page.component';
import { BottomSheetPageComponent } from './pages/bottom-sheet-page/bottom-sheet-page.component';
import { DemoBottomSheetComponent } from './demo-bottom-sheet/demo-bottom-sheet.component';
import { TreePageComponent } from './pages/tree-page/tree-page.component';
import { BackgroundPageComponent } from './pages/background-page/background-page.component';

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
    TreePageComponent,
    BackgroundPageComponent,
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
    MatSidenavModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTreeModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DemoDialogComponent, DemoBottomSheetComponent]
})
export class AppModule { }
