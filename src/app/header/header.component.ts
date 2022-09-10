<<<<<<< HEAD
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUserEntyty } from '../interfaces/user-entyty.interface';
import { AuthServiceService } from '../authentication/services/auth-service.service';
import { Subject, takeUntil } from 'rxjs';
=======
import { Component, DoCheck } from '@angular/core';
import { IUserEntyty } from '../interfaces/user-entyty.interface';
import { AuthServiceService } from '../authentication/services/auth-service.service';
>>>>>>> main

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
      .subscribe((isAuth$: boolean) => {
        this.isAuth = isAuth$;
        let currentUserData: string | null = localStorage.getItem('currentUser');
        this.currentUser = currentUserData ? JSON.parse(currentUserData) : '';
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
