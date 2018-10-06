import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../services/story.service';
import { JsonPagesPipe } from './pages.pipe';

import { STORIES } from '../../shared/constants/stories';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})

export class LibraryComponent implements OnInit {
  stories = STORIES;
  pages: string[];
  story: string;
  constructor(
    private storyService: StoryService,
    private pagesPipe: JsonPagesPipe
  ) { }

  ngOnInit() {}
}
