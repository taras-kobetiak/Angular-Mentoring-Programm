import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/header/services/auth-service.service';
import { IUserEntyty } from 'src/app/interfaces/user-entyty.interface';
import { ILoginForm } from '../interfaces/login.form.interface';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  usersData: IUserEntyty[];
  currentUser: IUserEntyty;

  constructor(private authService: AuthServiceService, private router: Router) { }

  async onSubmit(form: NgForm): Promise<void> {

    this.currentUser = form.value;

    await this.authService.logIn().then((response) => response.json())
      .then((usersData) => this.usersData = usersData);

    if (!this.usersData.find(user => user.email === this.currentUser.email
      && user.password === this.currentUser.password)) {
      alert('wrong data, please check your email and pass');
    } else {

      await this.authService.getUserInfo(this.currentUser.email).then(response => response.json())
        .then((userInfo) => this.currentUser = userInfo[0]);

      localStorage.setItem(`currentUser`, JSON.stringify(this.currentUser));
      this.router.navigate(['/courses']);
    }
  }
}
