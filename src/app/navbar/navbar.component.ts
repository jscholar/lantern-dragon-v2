import { Component, OnInit } from '@angular/core';
import {SECTIONS} from '../shared/constants/sections';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sections = SECTIONS;

  constructor() { }

  ngOnInit() {
  }

}
