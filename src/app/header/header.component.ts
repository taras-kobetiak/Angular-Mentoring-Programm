import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUserEntyty } from '../interfaces/user-entyty.interface';
import { AuthServiceService } from '../authentication/services/auth-service.service';
// import { LoadingService } from '../loading-block/servises/loading.service';
import { Observable, Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuth: boolean;
  currentUser: IUserEntyty;
  private currentSubscribes: Subject<void> = new Subject<void>();

  constructor(private authService: AuthServiceService) { };

  ngOnInit(): void {

    this.authService.isAuthenticated().pipe(
      takeUntil(this.currentSubscribes)
    ).subscribe(val => {
      this.isAuth = val;
      if (this.isAuth) {

        setTimeout(() => {
          let userData: string | null = localStorage.getItem('currentUser');
          let userDataParse: any = userData ? JSON.parse(userData) : ''
          let user: string = userDataParse;
          this.authService.getUserInfo(user).pipe(
            takeUntil(this.currentSubscribes)
          ).subscribe((val: IUserEntyty[]) => {
            this.currentUser = val[0];
          })
        }, 0)
      }
    });
  }

  onLogOutClick(): void {
    this.authService.logOut();
  }

  ngOnDestroy(): void {
    this.currentSubscribes.next();
    this.currentSubscribes.complete();
  }
}
