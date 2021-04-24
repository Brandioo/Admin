import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

export interface Comments {

  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;

}

@Injectable({
  providedIn: 'root'
})

export class CommentsService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/comments');
  }

}
