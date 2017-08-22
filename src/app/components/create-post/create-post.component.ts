import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Post } from '../../model/Post';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  protected post: Post;

  constructor(
    private postsService: PostsService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.post = new Post();
  }

  back() {
    this.location.back();
  }

  save() {
    this.postsService.save(this.post)
      .then(post => this.router.navigate(['/post', post.id]));
  }


}
