import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoadingSelector } from './store/reducers/isLoading.reducer';
import { isLoginSelector } from './store/reducers/isAuth.reducer';
import { AuthServiceService } from './authentication/services/auth-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy, OnInit {
  isAuth$: Observable<boolean> = this.store.select(isLoginSelector);
  isLoading$: Observable<boolean> = this.store.select(isLoadingSelector);

  constructor(
    private store: Store,
    private authService: AuthServiceService
  ) { }
  ngOnInit(): void {
    console.log(localStorage);

  }

  ngOnDestroy(): void {
    this.authService.logOut()
  }
}