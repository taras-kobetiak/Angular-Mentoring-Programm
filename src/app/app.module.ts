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
import { ScaleBlockDirective } from './pages-block/directives/translate-block.directive';
import { LoginModule } from './login-page/login-page.module';
import { OrderByPipe } from './pages-block/pipes/order-by.pipe';
import { AddCoursePageModule } from './add-course-page/add-course-page.module';
import { AuthGuard } from './guards/isAuth.guard';
import { AuthServiceService } from './authentication/services/auth-service.service';
import { CoursesService } from './pages-block/services/courses.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './authentication/interceptor/auth.interceptor';
import { SharedModule } from './shared/shared.module';
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
<<<<<<< HEAD
    SharedModule
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
