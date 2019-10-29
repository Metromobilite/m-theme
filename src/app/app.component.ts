import { Component, Renderer2, } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navLinks = [
    { path: '/button', label: 'Button' },
    { path: '/list', label: 'List' },
    { path: '/expansion-panel', label: 'Expansion Panel' },
    { path: '/dialog', label: 'Dialog' },
    { path: '/bottom-sheet', label: 'Bottom Sheet' },
  ];

  constructor(
    private renderer: Renderer2,
    private snackBar: MatSnackBar
  ) { }

  onThemeSwitchChange(change: MatButtonToggleChange) {
    if (document.body.classList.contains('dark-theme') && change.value === 'light-theme') {
      this.renderer.removeClass(document.body, 'dark-theme');
      this.renderer.addClass(document.body, 'light-theme');
    } else if (document.body.classList.contains('light-theme') && change.value === 'dark-theme') {
      this.renderer.removeClass(document.body, 'light-theme');
      this.renderer.addClass(document.body, 'dark-theme');
    }
  }

  openSnackBar() {
    this.snackBar.open('Message in snack-bar', 'Action');
  }
}
