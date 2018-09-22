import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import { Story } from '../shared/models/story';


import {STORIES} from '../shared/constants/stories';

@Injectable()

export class StoryService {

  private storyUrl = 'https://public-api.wordpress.com/wp/v2/sites/lanterndragonworks.wordpress.com/pages/';  // WP API, pages
  private pagesUrl = 'https://public-api.wordpress.com/wp/v2/sites/lanterndragonworks.wordpress.com/pages?per_page=50';  // URL to pages api
  private stories = STORIES;
  file: FormGroup;
  constructor(private http: HttpClient) {}
  // test get pages
  getPages(): Observable<any> {
    return this.http.get(this.pagesUrl);
  }

  getStory(story, chapter): Observable<any> {
    return this.http.get(this.storyUrl + story.parts[chapter]);
  }
}
