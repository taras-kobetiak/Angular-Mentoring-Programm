import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesPageComponent } from './pages-block/courses-page/courses-page.component';
import { SearchFormComponent } from './pages-block/search-form/search-form.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { LoadMoreComponent } from './pages-block/load-more/load-more.component';
import { PagesBlockComponent } from './pages-block/pages-block.component';
import { NewBorderDirective } from './pages-block/directives/new-border.directive';
import { DurationPipe } from './pages-block/pipes/duration.pipe';
import { TranslateBlockDirective } from './pages-block/directives/translate-block.directive';
import { LoginPageModule } from './login-page/login-page.module';
import { AddCourseModule } from './add-course/add-course.module';
import { OrderByPipe } from './pages-block/pipes/order-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursesPageComponent,
    SearchFormComponent,
    BreadcrumbsComponent,
    LoadMoreComponent,
    PagesBlockComponent,
    NewBorderDirective,
    DurationPipe,
    TranslateBlockDirective,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginPageModule,
    AddCourseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
