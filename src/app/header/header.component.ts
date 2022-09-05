import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUserEntyty } from '../interfaces/user-entyty.interface';
import { AuthServiceService } from '../authentication/services/auth-service.service';
import { filter, Observable, Subject, switchMap, takeUntil } from 'rxjs';

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
      filter((value: boolean) => {
        this.isAuth = value;
        return value !== false;
      }),
      switchMap(() => {
        let currentUserData: string | null = localStorage.getItem('currentUser');
        let currentUserEmail: string = currentUserData ? JSON.parse(currentUserData) : '';
        return this.authService.getUserInfo(currentUserEmail);
      }),

    )
      .subscribe((val: IUserEntyty[]) => {

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
