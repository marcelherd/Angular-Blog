import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Post } from '../../model/Post';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post: Post;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
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

  save() {
    this.postsService.update(this.post)
      .then(post => this.router.navigate(['/post', post.id]));
  }

}
