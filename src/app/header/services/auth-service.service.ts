import { Injectable } from '@angular/core';
import { ILoginForm } from 'src/app/login-page/interfaces/login.form.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  currentUser: ILoginForm;


  logIn(userInfo: ILoginForm): void {
    localStorage.setItem(userInfo.email, userInfo.password);
    this.currentUser = userInfo
  }

  logOut(): void {
    localStorage.clear()
  }

  isAuthenticated(userLogin: string): boolean {
    return Boolean(localStorage.getItem(userLogin))
  }

  getUserInfo(): string | undefined {
    if (this.currentUser) {
      return this.currentUser.email
    }
    else return;
  }
}