import { Injectable } from '@angular/core';
import { ILoginForm } from 'src/app/login-page/interfaces/login.form.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  logIn(userInfo: ILoginForm): void {
    localStorage.setItem(userInfo.email, userInfo.password)
  }

  logOut(): void {
    localStorage.clear()
  }

  isAuthenticated(userLogin: string): boolean {
    return Boolean(localStorage.getItem(userLogin))
  }

  getUserInfo(userInfo: ILoginForm): string {
    return userInfo.email
  }
}