import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Post } from '../model/Post';

@Injectable()
export class PostsService {

  private postsUrl = 'api/posts';

  constructor(private http: Http) { }

  all(): Promise<Post[]> {
    return this.http.get(this.postsUrl)
      .toPromise()
      .then(response => response.json().data as Post[])
      .catch(this.handleError);
  }

  one(id: number): Promise<Post> {
    const url = `${this.postsUrl}/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Post)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
