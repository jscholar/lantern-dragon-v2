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
  spoil: boolean;
  spoilButton: string;
  constructor() { }

  ngOnInit() {
    this.spoil = false;
    this.spoilButton = '*Show Spoilers*';
  }
  toggleSpoilers() {
    this.spoil = !this.spoil;
    this.spoilButton = this.spoil ? '*Hide Spoilers*' : '*Show Spoilers*';
  }
}
