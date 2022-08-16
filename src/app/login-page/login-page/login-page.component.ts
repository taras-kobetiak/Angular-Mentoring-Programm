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

  usersData: IUserEntyty[];
  currentUser: IUserEntyty;

  constructor(private authService: AuthServiceService, private router: Router) { }

onSubmit(form: NgForm): void {
    this.currentUser = form.value;
    this.createUsersData();
  }

 createUsersData(): void {
this.authService.logIn().then((usersData)=> this.usersData = usersData)
  .then(()=>{
    if (!this.usersData.find(user => user.email === this.currentUser.email
      && user.password === this.currentUser.password)) {
      alert('wrong data, please check your email and pass');
    } else {
      let userInfo = this.authService.getUserInfo(this.currentUser.email)
        .then((userInfo)=>{
          this.currentUser = userInfo[0];
          localStorage.setItem(`currentUser`, JSON.stringify(this.currentUser));
          this.router.navigate(['/courses']);
        })
    }
  })
  }
}
