import {Component, Input, OnInit} from '@angular/core';
import { Comment } from '../../shared/models/comment';
import { CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  page = 'extras';
  comments: Comment[];
  constructor(public commentService: CommentService) { }

  ngOnInit() {}
  submitComment(name, content): void {
    this.commentService.addComment(name.value, content.value, this.page);
    name.value = content.value = '';
  }
}
