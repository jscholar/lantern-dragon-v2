import {Component, OnDestroy, OnInit} from '@angular/core';
import { Comment } from '../../shared/models/comment';
import { CommentService} from '../../services/comment.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
  comments: Comment[];
  private commentsSub: Subscription;
  constructor(public commentService: CommentService) { }

  ngOnInit() {
    this.comments = this.commentService.getComments();
    this.commentsSub = this.commentService.commentUpdateListener()
      .subscribe((comments: Comment[]) => {
        this.comments = comments;
      });
  }
  submitComment(name, content): void {
    this.commentService.addComment(name.value, content.value);
  }
  ngOnDestroy () {
    this.commentsSub.unsubscribe();
  }
}
