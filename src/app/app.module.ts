import { NgModule, isDevMode } from '@angular/core';
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
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { AuthEffects } from './state/authentication/auth.effect';
import { CoursesListEffects } from './state/courses-list/courses.effect';

@NgModule({
  declarations: [
    AppComponent,
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
    MainContentModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AppEffects, AuthEffects, CoursesListEffects])
  ],
  providers:
    [
      AuthServiceService,
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
