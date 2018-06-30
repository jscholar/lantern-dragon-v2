import {Component, OnDestroy, OnInit} from '@angular/core';
import { Comment } from '../../shared/models/comment';
import { CommentService} from '../../services/comment.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

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
    this.commentsSub = this.commentService.commentUpdateListener()
      .subscribe((comments: Comment[]) => {
        this.comments = comments;
      });
    this.commentService.pullComments();
  }
  submitComment(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const comment: Comment = {
      user: form.value.user || 'anonymous',
      content: form.value.content,
      date: Date(),
      id: null
    };
    this.commentService.addComment(comment);
    form.reset();
  }
  deleteComment(commentId: string) {
    console.log('component: deleting', commentId);
    this.commentService.deleteComment(commentId);
  }
  ngOnDestroy () {
    this.commentsSub.unsubscribe();
  }
}
