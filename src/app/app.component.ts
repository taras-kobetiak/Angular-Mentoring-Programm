import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { isLoadingSelector } from './store/reducers/isLoading.reducer';
import { isLoginSelector } from './store/reducers/isLogin.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  isAuth$: Observable<boolean> = this.store.select(isLoginSelector);
  isLoading$: Observable<boolean> = this.store.select(isLoadingSelector);

  constructor(private store: Store) { }

}