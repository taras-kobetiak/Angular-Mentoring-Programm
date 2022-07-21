import { Injectable } from '@angular/core';
import { ILoginForm } from 'src/app/login-page/interfaces/login.form.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  defaultUser: ILoginForm = {
    email: '',
    password: ''
  };

  logIn(userInfo: ILoginForm): void {
    localStorage.setItem('currentUser', JSON.stringify({ email: userInfo.email, password: userInfo.password }));
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('currentUser'));
  }

  getUserInfo(): ILoginForm {
    let currentUser: ILoginForm;
    let currentUserData: null | string = localStorage.getItem('currentUser');
    if (currentUserData) {
      return currentUser = JSON.parse(currentUserData);
    }
    return this.defaultUser
  }
}