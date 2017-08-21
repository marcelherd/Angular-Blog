import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from '../components/posts/posts.component';
import { PostComponent } from '../components/post/post.component';
import { AdminComponent } from '../components/admin/admin.component';
import { CreatePostComponent } from '../components/create-post/create-post.component';
import { EditPostComponent } from '../components/edit-post/edit-post.component';
import { DeletePostComponent } from '../components/delete-post/delete-post.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/new', component: CreatePostComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'post/:id/edit', component: EditPostComponent },
  { path: 'post/:id/delete', component: DeletePostComponent },
  { path: 'administration', component: AdminComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
