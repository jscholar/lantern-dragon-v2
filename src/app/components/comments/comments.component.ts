import {Component, OnDestroy, OnInit} from '@angular/core';
import { Comment } from '../../shared/models/comment';
import { CommentService} from '../../services/comment.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
  comments: Comment[];
  form: FormGroup;
  private commentsSub: Subscription;
  constructor(public commentService: CommentService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'user': new FormControl(null,
        {validators: [Validators.maxLength(30)]}),
      'content' : new FormControl(null,
        {validators: [Validators.required, Validators.maxLength(500)]})
    });
    this.commentsSub = this.commentService.commentUpdateListener()
      .subscribe((comments: Comment[]) => {
        this.comments = comments;
      });
    this.commentService.pullComments();
  }
  submitComment(): void {
    if (this.form.invalid) {
      return;
    }
    const comment: Comment = {
      user: this.form.value.user || 'anonymous',
      content: this.form.value.content,
      date: Date(),
      id: null
    };
    this.commentService.addComment(comment);
    this.form.reset();
  }
  deleteComment(commentId: string) {
    console.log('component: deleting', commentId);
    this.commentService.deleteComment(commentId);
  }
  ngOnDestroy () {
    this.commentsSub.unsubscribe();
  }
}
