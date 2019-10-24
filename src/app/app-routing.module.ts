import { BottomSheetPageComponent } from './pages/bottom-sheet-page/bottom-sheet-page.component';
import { DialogPageComponent } from './pages/dialog-page/dialog-page.component';
import { ExpansionPanelPageComponent } from './pages/expansion-panel-page/expansion-panel-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/button', pathMatch: 'full' },
  { path: 'button', component: ButtonPageComponent },
  { path: 'list', component: ListPageComponent },
  { path: 'expansion-panel', component: ExpansionPanelPageComponent },
  { path: 'dialog', component: DialogPageComponent },
  { path: 'bottom-sheet', component: BottomSheetPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
