import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDark = true;
  toggleDark() {
    this.isDark = !this.isDark;
    console.log(this.isDark);
  }
}
