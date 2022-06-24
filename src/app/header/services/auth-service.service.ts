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

  isAuthenticated(form: any): boolean {
    return localStorage.getItem(form.email) ? true :
      false;
  }

  getUserInfo(form: any): string | void {

    //   this.users.map(user => {
    //     if (user.email === form.value.email && user.password === form.value.password) {
    //       return user.login
    //     } else {
    //       return
    //     }
    //   })
    // }
  }
}