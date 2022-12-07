import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUserEntyty } from '../../../../interfaces/user-entyty.interface';
import { AuthServiceService } from '../../../../authentication/services/auth-service.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { isLoadingSelector } from 'src/app/store/reducers/isLoading.reducer';
import { isAuthHeaderFalse } from 'src/app/store/actions/isAuth.action';
import { isLoginSelector } from 'src/app/store/reducers/isAuth.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  currentUser: IUserEntyty;
  isAuth$: Observable<boolean> = this.store.select(isLoginSelector)

  private unsubscribingData$: Subject<void> = new Subject<void>();

  constructor(private store: Store,

  ) { };

  ngOnInit(): void {
    this.store.select(isLoadingSelector).pipe(
      takeUntil(this.unsubscribingData$),
    )
      .subscribe((isAuth: boolean) => {
        let userData = localStorage.getItem('currentUser') || '';
        if (userData) {
          this.currentUser = JSON.parse(userData)
        }
      })
  }

  onLogOutClick(): void {
    this.store.dispatch(isAuthHeaderFalse());
  }

  ngOnDestroy(): void {
    this.unsubscribingData$.next();
    this.unsubscribingData$.complete();
  }
}
