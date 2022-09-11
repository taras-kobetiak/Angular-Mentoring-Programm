import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, map, Subject, takeUntil, } from 'rxjs';
import { AuthServiceService } from 'src/app/authentication/services/auth-service.service';
import { IUserEntyty } from 'src/app/interfaces/user-entyty.interface';
import { LoadingService } from 'src/app/shared/loading-block/servises/loading.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {

  private unsubscribingData$: Subject<void> = new Subject<void>();

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private loadingService: LoadingService
  ) { }

  onSubmit(form: NgForm): void {
    this.loadingService.setValue(true);
    const currentUser: IUserEntyty = form.value;
    this.createUsersData(currentUser);
  }

  createUsersData(currentUser: IUserEntyty): void {
    this.authService.getUserInfo(currentUser.email).pipe(
      map((user: IUserEntyty[]) => user[0]),
      filter((user: IUserEntyty) => {
        if (!user || user.password !== currentUser.password) {
          this.onWrongData();
          return false;
        }
        return user.password === currentUser.password;
      }),
      takeUntil(this.unsubscribingData$)
    ).subscribe((user: IUserEntyty) => {
      localStorage.setItem('token', user.token);
      localStorage.setItem(`currentUser`, JSON.stringify(user));
      this.authService.isAuth$.next(true);
      this.router.navigate(['/courses']);
      this.loadingService.setValue(false);
    })
  }

  onWrongData(): void {
    alert('wrong data, please check your email and pass');
    this.loadingService.setValue(false);
  }

  ngOnDestroy(): void {
    this.unsubscribingData$.next();
    this.unsubscribingData$.complete();
  }
}