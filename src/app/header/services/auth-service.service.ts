import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  logIn(form: any): void {
    localStorage.setItem(form.value.email, form.value.password)
  }

  logOut(): void {
    localStorage.clear()
  }

  isAuthenticated(user: string): boolean {
    return localStorage.getItem(user) ? true :
      false;
  }

  getUserInfo(form: any): string | void {
    return form.value.email
  }
}