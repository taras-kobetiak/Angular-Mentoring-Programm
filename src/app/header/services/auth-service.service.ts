import { Injectable } from '@angular/core';
import { ILoginForm } from 'src/app/login-page/interfaces/login.form.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  currentUser: ILoginForm;
  defaultUser: ILoginForm = {
    email: '',
    password: ''
  };

  logIn(userInfo: ILoginForm): void {
    localStorage.setItem('currentUser', JSON.stringify({ email: userInfo.email, password: userInfo.password }));
    this.currentUser = userInfo
  }

  logOut(): void {
    localStorage.removeItem('currentUser')
  }

  isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('currentUser'))
  }

  getUserInfo(): ILoginForm {
    return this.currentUser || this.defaultUser
  }
}