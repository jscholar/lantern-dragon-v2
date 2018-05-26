import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { StoriesComponent } from './stories/stories.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ExtrasComponent } from './extras/extras.component';
import {StoryService} from './story.service';
import {JsonPagesPipe} from './stories/pages.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StoriesComponent,
    NavbarComponent,
    GalleryComponent,
    ExtrasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StoryService,
    JsonPagesPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
