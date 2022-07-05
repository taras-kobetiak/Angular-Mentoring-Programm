import { Injectable } from '@angular/core';
import { ILoginForm } from 'src/app/login-page/interfaces/login.form.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  currentUser: ILoginForm;


  logIn(userInfo: ILoginForm): void {
    localStorage.setItem('currentUser', JSON.stringify({ email: userInfo.email, password: userInfo.password }));
    this.currentUser = userInfo
  }

  logOut(): void {
    localStorage.clear()
  }

  isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('currentUser'))
  }

  getUserInfo(): string | undefined {
    if (localStorage.getItem('currentUser')) {
      let userInfo = JSON.parse(localStorage.getItem('currentUser')!)
      return userInfo.email
    }
    else return;
  }
}