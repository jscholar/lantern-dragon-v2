import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { Character } from '../../shared/models/character';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})

export class BioComponent implements OnInit, OnChanges {
  @Input() selected: Character;
  spoil: boolean;
  spoilButton: string;
  constructor() {}

  ngOnInit() {
    this.spoil = false;
    this.spoilButton = '*Show Spoilers*';
  }
  ngOnChanges() {
    this.spoil = false;
    this.spoilButton = '*Show Spoilers*';
  }
  toggleSpoilers() {
    this.spoil = !this.spoil;
    this.spoilButton = this.spoil ? '*Hide Spoilers*' : '*Show Spoilers*';
  }
}
