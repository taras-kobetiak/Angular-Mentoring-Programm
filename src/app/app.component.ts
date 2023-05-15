import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthServiceService } from './authentication/services/auth-service.service';
import { authIsLoadingSelector, isAuthSelector } from './state/authentication/auth.selector';
import { AuthorsIsLoadingSelector } from './state/authors/authors.selector';
import { CoursesIsLoadingSelector } from './state/courses/courses.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {


  test2: string;
  test3: string;


  isAuth$: Observable<boolean> = this.store.select(isAuthSelector);
  isAuthLoading$: Observable<boolean> = this.store.select(authIsLoadingSelector);
  isAuthorsLoading$: Observable<boolean> = this.store.select(AuthorsIsLoadingSelector);
  isCoursesLoading$: Observable<boolean> = this.store.select(CoursesIsLoadingSelector);

  constructor(
    private store: Store,
    private authService: AuthServiceService
  ) { }

  ngOnDestroy(): void {
    this.authService.logOut()
  }
}