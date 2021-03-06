import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { DaysAgoPipe } from './pipes/days-ago.pipe';
import { ToShortDatePipe } from './pipes/to-short-date.pipe';
import { ToMoneySymbolPipe } from './pipes/to-money-symbol.pipe';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { BlogComponent } from './components/blog/blog.component';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';
import { PostjobComponent } from './components/postjob/postjob.component';
import { WantjobComponent } from './components/wantjob/wantjob.component';
import { BodyComponent } from './components/body/body.component';
import { StatistiquesComponent } from './components/statistiques/statistiques.component';
import { BlogSectionComponent } from './components/blog/blog-section/blog-section.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { HomeSectionComponent } from './components/home/home-section/home-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    DaysAgoPipe,
    ToShortDatePipe,
    ToMoneySymbolPipe,
    AboutComponent,
    ContactComponent,
    SubscribeComponent,
    TestimonialComponent,
    BlogComponent,
    PageNotFoundComponent,
    PostjobComponent,
    WantjobComponent,
    BodyComponent,
    StatistiquesComponent,
    BlogSectionComponent,
    JobsComponent,
    HomeSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
