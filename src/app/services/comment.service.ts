import { Injectable } from '@angular/core';
import {Comment} from '../shared/models/comment';

interface Comments {
  [key: string]: Comment[];
}

@Injectable()

export class CommentService {
  comments: Comments = {};
  constructor () {
    this.comments['extras'] = [new Comment('test', 'test')];
  }
  addComment(name: string, content: string, page: string) {
    if (!this.comments[page]) {
      this.comments[page] = [];
    }
    this.comments[page].push(new Comment(name.length ? name : 'anon', content));
    console.log('added comment');
  }
}
