import { Component, OnInit } from '@angular/core';

import { PostsService } from './posts.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private postsService: PostsService) { }

  updatePosts(): void {
    this.postsService.all().then(posts => this.posts = posts);
  }

  ngOnInit() {
    this.updatePosts();
  }

}
