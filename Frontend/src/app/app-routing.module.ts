import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PostjobComponent } from './components/postjob/postjob.component';
import { WantjobComponent } from './components/wantjob/wantjob.component';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'post-job', component: PostjobComponent
  },
  {
    path: 'want-job', component: WantjobComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
