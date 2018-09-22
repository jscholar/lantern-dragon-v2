import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { StoryService } from '../../services/story.service';
import { FormGroup } from '@angular/forms';

import {STORIES} from '../../shared/constants/stories';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  private storyUrl: string;
  private stories = STORIES;
  private story;
  private chapter: string;
  public htmlText: string;
  public chapters;
  file: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private storyService: StoryService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.storyUrl = paramMap.get('story');
      if (paramMap.has('chapter')) {
        this.chapter = paramMap.get('chapter');
      } else {
        this.chapter = null;
      }
    });
    this.story = this.stories.find(s => s.routeUrl === this.storyUrl);
    this.chapters = new Array(...Object.keys(this.story.parts));
  }
  // Sets the selected story
  getStory(chapter): void {
    this.storyService.getStory(this.story, chapter).subscribe((data: any) => {
      this.htmlText = data.content.rendered;
    });
  }

}
