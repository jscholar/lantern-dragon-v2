import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuOptions: String[] = ['stories', 'about'];
  fadeLeft(): void {
    $('.menu').fadeOut(1000, function () {
      console.log('finished fading');
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
