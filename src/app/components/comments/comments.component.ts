import {Component, Input, OnInit} from '@angular/core';
import { Comment } from '../../shared/models/comment';
import { CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  page = 'go to hell';
  comments: Comment[] = [];
  constructor(public commentService: CommentService) { }

  ngOnInit() {
    this.comments = this.commentService.getComments(this.page);
  }
  submitComment(name, content) {
    this.commentService.addComment(name.value, content.value, this.page);
    name.value = content.value = '';
  }
}
