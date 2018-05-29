import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { JsonPagesPipe } from './pages.pipe';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  pages: string[];
  story: string;
  constructor(
    private storyService: StoryService,
    private pagesPipe: JsonPagesPipe
  ) { }
    getPages(): void {
      this.storyService.getPages().
      subscribe(
        pages => this.pages = this.pagesPipe.transform(pages)
      );
    }
    getStory(): void {
      if (!this.story) {
        this.storyService.getStory().subscribe(
          story => this.story = story.content.rendered
        );
      }
    }
  ngOnInit() {
  }
}
