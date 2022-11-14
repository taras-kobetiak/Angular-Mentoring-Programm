import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './modules/login-page/login-page.module';
import { AddCoursePageModule } from './modules/add-course-page/add-course-page.module';
import { AuthGuard } from './guards/isAuth.guard';
import { AuthServiceService } from './authentication/services/auth-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './authentication/interceptor/auth.interceptor';
import { SharedModule } from './modules/shared/shared.module';
import { UrlInterceptorInterceptor } from './interceptor/url-interceptor.interceptor';
import { MainContentModule } from './modules/main-content/main-content.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    AppComponent,
    // HeaderComponent,
    // FooterComponent,
    // CoursesPageComponent,
    // SearchFormComponent,
    // BreadcrumbsComponent,
    // LoadMoreComponent,
    // PagesBlockComponent,
    // NewBorderDirective,
    // DurationPipe,
    // ScaleBlockDirective,
    // OrderByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginModule,
    AddCoursePageModule,
    SharedModule,
    MainContentModule
  ],
  providers:
    [
      AuthServiceService,
      // CoursesService,
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
