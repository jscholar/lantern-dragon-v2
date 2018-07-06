import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  private story: string;
  private chapter: string;
  public htmlText: string;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private storyService: StoryService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.story = paramMap.get('story');
      if (paramMap.has('chapter')) {
        this.chapter = paramMap.get('chapter');
      } else {
        this.chapter = null;
      }
    });
  }
  // Sets the selected story
  getStory(): void {
    this.storyService.getStory().subscribe((data: any) => {
      this.htmlText = data.content.rendered;
      console.log(this.htmlText);
    });
  }

}
