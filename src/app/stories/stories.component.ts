import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  constructor(private story: StoryService) { }
    getPages(): void {
      this.story.getPages();
    }
  ngOnInit() {
  }

}
