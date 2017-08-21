import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppMemoryModule } from './modules/app-memory.module';

import { AppComponent } from './app.component';

import { AdminComponent } from './components/admin/admin.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './components/posts/posts.service';
import { PostComponent } from './components/post/post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { DeletePostComponent } from './components/delete-post/delete-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    AdminComponent,
    CreatePostComponent,
    EditPostComponent,
    DeletePostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AppMemoryModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
