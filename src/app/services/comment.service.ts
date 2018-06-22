import {Injectable, OnInit} from '@angular/core';
import { Comment } from '../shared/models/comment';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs/Subject';

@Injectable()

export class CommentService implements OnInit {
  private comments: Comment[] = [];
  private commentsUpdated = new Subject<Comment[]>();
  constructor (private http: HttpClient) {}
  ngOnInit () {
    this.pullComments();
  }

  addComment(name: string, content: string) {
    this.comments.push(new Comment(name.length ? name : 'anon', content));
    this.commentsUpdated.next([...this.comments]);
    console.log('added comment');
  }
  commentUpdateListener() {
    return this.commentsUpdated.asObservable();
  }
  getComments(): Comment[] {
    return this.comments;
  }

  pullComments() {
    this.http.get<{message: string, comments: Comment[]}>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        this.comments = postData.comments;
        this.commentsUpdated.next([...this.comments]);
      });
  }
}
