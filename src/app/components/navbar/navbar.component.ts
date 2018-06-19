import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {SECTIONS} from '../../shared/constants/sections';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  sections: String[];
  @Input() selected: string;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  select(section: string) {
    this.selected = section;
  }
  constructor() { }

  ngOnInit() {
    this.sections = SECTIONS;
  }

  dark() {
    this.notify.emit('dark');
  }
}
