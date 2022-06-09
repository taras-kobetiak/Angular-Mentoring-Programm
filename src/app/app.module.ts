import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakeLogoComponentsComponent } from './fake-logo-components/fake-logo-components.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AddCourseButtonComponent } from './add-course-button/add-course-button.component';
import { FormsModule } from '@angular/forms';
import { ButtonEditComponent } from './button-edit/button-edit.component';
import { ButtonDeleteComponent } from './button-delete/button-delete.component';
import { LoadMoreComponent } from './load-more/load-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FakeLogoComponentsComponent,
    CoursesPageComponent,
    SearchFormComponent,
    BreadcrumbsComponent,
    AddCourseButtonComponent,
    ButtonEditComponent,
    ButtonDeleteComponent,
    LoadMoreComponent,

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
