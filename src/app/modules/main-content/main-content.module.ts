import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesPageComponent } from './components/pages-block/courses-page/courses-page.component';
import { SearchFormComponent } from './components/pages-block/search-form/search-form.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { NewBorderDirective } from './components/pages-block/directives/new-border.directive';
import { ScaleBlockDirective } from './components/pages-block/directives/translate-block.directive';
import { LoadMoreComponent } from './components/pages-block/load-more/load-more.component';
import { PagesBlockComponent } from './components/pages-block/pages-block.component';
import { DurationPipe } from './components/pages-block/pipes/duration.pipe';
import { OrderByPipe } from './components/pages-block/pipes/order-by.pipe';
import { CoursesService } from './components/pages-block/services/courses.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';




// import { HeaderComponent } from './modules/main-content/components/header/header.component';
// import { FooterComponent } from './modules/main-content/components/footer/footer.component';
// import { CoursesPageComponent } from './modules/main-content/components/pages-block/courses-page/courses-page.component';
// import { SearchFormComponent } from './modules/main-content/components/pages-block/search-form/search-form.component';
// import { BreadcrumbsComponent } from './modules/main-content/components/breadcrumbs/breadcrumbs.component';
// import { LoadMoreComponent } from './modules/main-content/components/pages-block/load-more/load-more.component';
// import { PagesBlockComponent } from './modules/main-content/components/pages-block/pages-block.component';
// import { NewBorderDirective } from './modules/main-content/components/pages-block/directives/new-border.directive';
// import { DurationPipe } from './modules/main-content/components/pages-block/pipes/duration.pipe';
// import { ScaleBlockDirective } from './modules/main-content/components/pages-block/directives/translate-block.directive';
// import { OrderByPipe } from './modules/main-content/components/pages-block/pipes/order-by.pipe';
// import { CoursesService } from './modules/main-content/components/pages-block/services/courses.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CoursesPageComponent,
    SearchFormComponent,
    BreadcrumbsComponent,
    LoadMoreComponent,
    PagesBlockComponent,
    NewBorderDirective,
    DurationPipe,
    ScaleBlockDirective,
    OrderByPipe,
  ],
  providers: [
    CoursesService
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CoursesPageComponent,
    SearchFormComponent,
    BreadcrumbsComponent,
    LoadMoreComponent,
    PagesBlockComponent,
  ]
})
export class MainContentModule { }
