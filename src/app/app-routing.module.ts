import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import {StoriesComponent} from './stories/stories.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ExtrasComponent} from './extras/extras.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'stories', component: StoriesComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'extras', component: ExtrasComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
