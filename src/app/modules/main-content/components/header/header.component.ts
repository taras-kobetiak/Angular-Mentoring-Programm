import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUserEntyty } from '../../../../interfaces/user-entyty.interface';
import { AuthServiceService } from '../../../../authentication/services/auth-service.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  currentUser: IUserEntyty;
  isAuth: boolean;
  private unsubscribingData$: Subject<void> = new Subject<void>();

  constructor(public authService: AuthServiceService) { };

  ngOnInit(): void {
    this.authService.isAuthenticated().pipe(
      takeUntil(this.unsubscribingData$),
    )
      .subscribe((isAuth: boolean) => {
        this.isAuth = isAuth;
        let userData = localStorage.getItem('currentUser') || '';
        if (userData) {
          this.currentUser = JSON.parse(userData)
        }
      })
  }

  onLogOutClick(): void {
    this.authService.logOut();
  }

  ngOnDestroy(): void {
    this.unsubscribingData$.next();
    this.unsubscribingData$.complete();
  }
}
