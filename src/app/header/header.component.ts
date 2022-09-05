import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUserEntyty } from '../interfaces/user-entyty.interface';
import { AuthServiceService } from '../authentication/services/auth-service.service';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  currentUser: IUserEntyty;
  isAuth$: Observable<boolean>;
  private unsubscribingData$: Subject<void> = new Subject<void>();

  constructor(public authService: AuthServiceService) { };

  ngOnInit(): void {
    this.isAuth$ = this.authService.isAuthenticated();

    let currentUserData: string | null = localStorage.getItem('currentUser');
    let currentUserEmail: string = currentUserData ? JSON.parse(currentUserData) : '';

    this.authService.getUserInfo(currentUserEmail).pipe(
      takeUntil(this.unsubscribingData$)
    ).subscribe((val: IUserEntyty[]) => {
      this.currentUser = val[0];

      console.log(this.currentUser);
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
