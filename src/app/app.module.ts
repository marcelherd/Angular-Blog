import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppMemoryModule } from './modules/app-memory.module';

import { AppComponent } from './app.component';

import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts/posts.service';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
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
