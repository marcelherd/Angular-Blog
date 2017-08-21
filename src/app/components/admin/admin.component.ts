import { Component, OnInit } from '@angular/core';

import { Post } from '../../model/Post';

import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  posts: Post[];

  constructor(private postsService: PostsService) { }

  updatePosts(): void {
    this.postsService.all().then(posts => this.posts = posts);
  }

  ngOnInit() {
    this.updatePosts();
  }

}
