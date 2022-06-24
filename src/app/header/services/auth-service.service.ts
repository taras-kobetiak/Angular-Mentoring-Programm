import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/classes';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  users: User[];

  isAuth: boolean;

  logIn(form: any) {
    localStorage.setItem(form.value.email, form.value.password)
  }

  logOut() {
    localStorage.clear()
  }

  isAuthenticated() {
    return this.isAuth = !this.isAuth;
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