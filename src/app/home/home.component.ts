import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuOptions: String[] = ['stories', 'gallery', 'about', 'extras'];
  @Input() selected: String;
  fadeLeft(): void {
    $('.menu').fadeOut(1000, function () {
      console.log('finished fading');
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
