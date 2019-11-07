import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { AboutComponent } from './components/about/about.component';
import { MaGalleryComponent } from './components/ma-gallery/ma-gallery.component';
import { MameteoComponent } from './components/mameteo/mameteo.component';

const routes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'about', component: AboutComponent },
  { path: 'maGallery', component: MaGalleryComponent },
  { path: 'maMeteo', component: MameteoComponent },
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
