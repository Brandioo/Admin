import { Component, OnInit } from '@angular/core';
import {Comments, CommentsService} from '../../services/comments.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {
  comments: Comments[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const commentsService = new CommentsService(this.http);
    commentsService.getComments().subscribe((data) => {// @ts-ignore
      this.comments = data;
    });
  }
}
