import { Component, OnInit } from '@angular/core';

import { Post } from '../../model/Post';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  protected post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.post = new Post();
  }

}
