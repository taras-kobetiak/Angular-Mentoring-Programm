import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthServiceService } from './authentication/services/auth-service.service';
import { isAuthSelector } from './state/authentication/auth.selector';
import { isLoadingSelector } from './state/loading/isLoading.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {
  isAuth$: Observable<boolean> = this.store.select(isAuthSelector);
  isLoading$: Observable<boolean> = this.store.select(isLoadingSelector);

  constructor(
    private store: Store,
    private authService: AuthServiceService
  ) { }

  ngOnDestroy(): void {
    this.authService.logOut()
  }
}