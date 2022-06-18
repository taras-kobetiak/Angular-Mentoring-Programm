import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AddCourseButtonComponent } from './add-course-button/add-course-button.component';
import { FormsModule } from '@angular/forms';
import { LoadMoreComponent } from './load-more/load-more.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesBlockComponent } from './pages-block/pages-block.component';
import { NewBorderDirective } from './courses-page/new-border.directive';
import { DurationPipe } from './courses-page/duration.pipe';
import { TranslateBlockDirective } from './courses-page/translate-block.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursesPageComponent,
    SearchFormComponent,
    BreadcrumbsComponent,
    AddCourseButtonComponent,
    LoadMoreComponent,
    NotFoundComponent,
    PagesBlockComponent,
    NewBorderDirective,
    DurationPipe,
    TranslateBlockDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
