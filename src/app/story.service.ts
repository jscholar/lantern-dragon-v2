import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class StoryService {

  private pagesUrl = 'https://public-api.wordpress.com/wp/v2/sites/lanterndragonworks.wordpress.com/pages';  // URL to pages api
  private pages;
  constructor(
    private http: HttpClient
  ) {}

  // test get pages
  getPages(): void {
    this.http.get(this.pagesUrl).subscribe(result => {
      this.pages = result;
      console.log(result);
    });
  }
}
