import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {StoriesComponent} from './components/stories/stories.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {ExtrasComponent} from './components/extras/extras.component';
import {NavbarComponent} from './components/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
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
