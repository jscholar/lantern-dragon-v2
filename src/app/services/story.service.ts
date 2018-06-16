import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class StoryService {

  private storyUrl = 'https://public-api.wordpress.com/wp/v2/sites/lanterndragonworks.wordpress.com/pages/548';  // Dragons revolt part 1
  private pagesUrl = 'https://public-api.wordpress.com/wp/v2/sites/lanterndragonworks.wordpress.com/pages?per_page=50';  // URL to pages api
  constructor(private http: HttpClient) {}

  // test get pages
  getPages(): Observable<any> {
    return this.http.get(this.pagesUrl);
  }

  getStory(): Observable<any> {
    return this.http.get(this.storyUrl);
  }
}
