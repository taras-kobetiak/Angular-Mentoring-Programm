import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesPageComponent } from './components/pages-block/courses-page/courses-page.component';
import { SearchFormComponent } from './components/pages-block/search-form/search-form.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadMoreComponent } from './components/pages-block/load-more/load-more.component';
import { PagesBlockComponent } from './components/pages-block/pages-block.component';
import { NewBorderDirective } from './components/pages-block/directives/new-border.directive';
import { DurationPipe } from './components/pages-block/pipes/duration.pipe';
import { ScaleBlockDirective } from './components/pages-block/directives/translate-block.directive';
import { LoginModule } from './modules/login-page/login-page.module';
import { OrderByPipe } from './components/pages-block/pipes/order-by.pipe';
import { AddCoursePageModule } from './modules/add-course-page/add-course-page.module';
import { AuthGuard } from './guards/isAuth.guard';
import { AuthServiceService } from './authentication/services/auth-service.service';
import { CoursesService } from './components/pages-block/services/courses.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './authentication/interceptor/auth.interceptor';
import { SharedModule } from './modules/shared/shared.module';
import { UrlInterceptorInterceptor } from './interceptor/url-interceptor.interceptor';

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
    ScaleBlockDirective,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    AddCoursePageModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers:
    [
      AuthServiceService,
      CoursesService,
      AuthGuard,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: UrlInterceptorInterceptor,
        multi: true,
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
