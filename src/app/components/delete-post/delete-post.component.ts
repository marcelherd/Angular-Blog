import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Post } from '../../model/Post';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {

  post: Post;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.postsService.one(+params.get('id')))
      .subscribe(post => this.post = post);
  }

  back() {
    this.location.back();
  }

  delete() {
    this.postsService.delete(this.post)
      .then(() => this.location.back());
  }

}
