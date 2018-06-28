import {Component, OnDestroy, OnInit} from '@angular/core';
import { Comment } from '../../shared/models/comment';
import { CommentService} from '../../services/comment.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { MatFormField } from '@angular/material';

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
  ngOnDestroy () {
    this.commentsSub.unsubscribe();
  }
}
