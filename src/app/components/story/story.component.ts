import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  story: string;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private storyService: StoryService
  ) { }

  ngOnInit() {
  }
  // Sets the selected story
  getStory(): void {
  }

}
