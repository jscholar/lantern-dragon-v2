import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LibraryComponent } from './components/library/library.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ExtrasComponent } from './components/extras/extras.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoryComponent } from './components/story/story.component';

const routes: Routes = [
 // { path: '', component: NavbarComponent },
  { path: 'about', component: AboutComponent},
  { path: 'library', component: LibraryComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'extras', component: ExtrasComponent},
  { path: 'library/:story', component: StoryComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
