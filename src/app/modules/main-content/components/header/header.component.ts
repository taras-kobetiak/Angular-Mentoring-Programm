import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUserEntyty } from '../../../../interfaces/user-entyty.interface';
import { AuthServiceService } from '../../../../authentication/services/auth-service.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { isLoadingSelector } from 'src/app/state/loading/isLoading.selector';
import { isAuthHeaderFalse } from 'src/app/state/authentication/auth.action';
import { currentUserSelector, isAuthSelector } from 'src/app/state/authentication/auth.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  currentUser: IUserEntyty;
  isAuth$: Observable<boolean> = this.store.select(isAuthSelector);
  user$: Observable<IUserEntyty> = this.store.select(currentUserSelector)



  constructor(private store: Store,
    private authService: AuthServiceService
  ) { };



  onLogOutClick(): void {
    this.store.dispatch(isAuthHeaderFalse());
    this.authService.logOut();
  }


}
