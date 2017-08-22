import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Post } from '../../model/Post';

@Injectable()
export class PostsService {

  private postsUrl = 'api/posts';
  private headers = new Headers({ 'Content-Type': 'application/json' });

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

  save(post: Post): Promise<Post> {
    return this.http
      .post(this.postsUrl, JSON.stringify({ title: post.title, body: post.body }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Post)
      .catch(this.handleError);
  }

  update(post: Post): Promise<Post> {
    const url = `${this.postsUrl}/${post.id}`;

    return this.http
      .put(url, JSON.stringify(post), { headers: this.headers })
      .toPromise()
      .then(() => post)
      .catch(this.handleError);
  }

  delete(post: Post): Promise<void> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
