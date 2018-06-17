import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../services/story.service';
import { JsonPagesPipe } from './pages.pipe';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
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
