import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthServiceService } from 'src/app/authentication/services/auth-service.service';
import { IUserEntyty } from 'src/app/interfaces/user-entyty.interface';
import { LoadingService } from 'src/app/shared/loading-block/servises/loading.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {

  usersData: IUserEntyty[];
  private unsubscribingData: Subject<void> = new Subject<void>();

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private loadingService: LoadingService
  ) { }

  onSubmit(form: NgForm): void {
    this.loadingService.setValue(true);
    const currentUser: IUserEntyty = form.value;
    this.createUsersData(currentUser);
    this.loadingService.setValue(false);
  }

  createUsersData(currentUser: IUserEntyty): void {
    this.authService.logIn().pipe(
      takeUntil(this.unsubscribingData)
    ).subscribe((usersData: IUserEntyty[]) => {
      this.usersData = usersData;
      if (!this.usersData.find(user => user.email === currentUser.email
        && user.password === currentUser.password)) {
        alert('wrong data, please check your email and pass');
      } else {

        this.authService.getUserInfo(currentUser.email).pipe(
          takeUntil(this.unsubscribingData)
        ).subscribe((userInfo: IUserEntyty[]) => {
          let user = userInfo[0];

          this.authService.isAuth.next(true);
          localStorage.setItem('token', user.token);


          localStorage.setItem(`currentUser`, JSON.stringify(user.email));
          this.router.navigate(['/courses']);
        })
      }
    })
  }

  ngOnDestroy(): void {
    this.unsubscribingData.next();
    this.unsubscribingData.complete();
  }

}
