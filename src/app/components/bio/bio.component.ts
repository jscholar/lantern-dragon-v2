import {Component, Input, OnInit} from '@angular/core';
import { CAST } from '../../shared/constants/cast';
import { Character } from '../../shared/models/character';
import {InputDecorator} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})

export class BioComponent implements OnInit {
  @Input() selected: Character;
  cast: Character[] = CAST;
  constructor() { }

  ngOnInit() {
  }
}
