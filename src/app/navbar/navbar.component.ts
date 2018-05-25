import { Component, OnInit, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {SECTIONS} from '../shared/constants/sections';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sections = SECTIONS;
  @Input() selected: string;
  select(section: string) {
    this.selected = section;
  }
  constructor() { }

  ngOnInit() {
  }

}
