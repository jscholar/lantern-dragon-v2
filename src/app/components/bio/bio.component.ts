import { Component, OnInit } from '@angular/core';
import { CAST } from '../../shared/constants/cast';
import { Character } from '../../shared/models/character';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  cast = CAST;
  selected: Character;
  constructor() { }

  ngOnInit() {
  }
  select(selected) {
    this.selected = selected;
  }
}
