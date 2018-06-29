import {Injectable, OnInit} from '@angular/core';
import { Comment } from '../shared/models/comment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class CommentService implements OnInit {
  private comments: Comment[] = [];
  private commentsUpdated = new Subject<Comment[]>();
  constructor (private http: HttpClient) {}
  ngOnInit () {
    this.pullComments();
  }

  addComment(comment: Comment) {
    this.http.post<{message: string}>('http://localhost:3000/api/posts', comment)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.comments.push(comment);
        this.commentsUpdated.next([...this.comments]);
      });
  }
  commentUpdateListener() {
    return this.commentsUpdated.asObservable();
  }
  getComments(): Comment[] {
    return this.comments;
  }

  pullComments() {
    this.http.get<{message: string, comments: any}>('http://localhost:3000/api/posts')
      .pipe(map((postData) => {
          return postData.comments.map(comment => {
            return {
              user: comment.user,
              content: comment.content,
              date: comment.date,
              id: comment._id
            };
          });
        }))
      .subscribe((newComments) => {
        this.comments = newComments;
        this.commentsUpdated.next([...this.comments]);
      });
  }
}
