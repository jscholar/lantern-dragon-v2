import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgGridModule } from 'angular4-grid';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { StoriesComponent } from './components/stories/stories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ExtrasComponent } from './components/extras/extras.component';
import {StoryService} from './services/story.service';
import {JsonPagesPipe} from './components/stories/pages.pipe';
import { NoContentComponent } from './components/no-content/no-content.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StoriesComponent,
    NavbarComponent,
    GalleryComponent,
    ExtrasComponent,
    NoContentComponent,
    CommentsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgGridModule
  ],
  providers: [
    StoryService,
    JsonPagesPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
