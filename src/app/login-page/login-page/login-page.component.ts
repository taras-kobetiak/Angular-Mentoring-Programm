import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/authentication/services/auth-service.service';
import { IUserEntyty } from 'src/app/interfaces/user-entyty.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  // isLoading: boolean;
  usersData: IUserEntyty[];

  constructor(private authService: AuthServiceService, private router: Router) { }

  onSubmit(form: NgForm): void {
    const currentUser: IUserEntyty = form.value;
    this.createUsersData(currentUser);
  }

  createUsersData(currentUser: IUserEntyty): void {
    this.authService.logIn().subscribe((usersData: IUserEntyty[]) => {
      this.usersData = usersData;
      if (!this.usersData.find(user => user.email === currentUser.email
        && user.password === currentUser.password)) {
        alert('wrong data, please check your email and pass');
      } else {

        this.authService.getUserInfo(currentUser.email).subscribe((userInfo: IUserEntyty[]) => {
          let user = userInfo[0];

          this.authService.isAuth.next(true);
          localStorage.setItem('token', user.token);


          localStorage.setItem(`currentUser`, JSON.stringify(user.email));
          this.router.navigate(['/courses']);
        })
      }
    })
  }
}
