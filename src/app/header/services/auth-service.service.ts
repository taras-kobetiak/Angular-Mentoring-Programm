import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserEntyty } from 'src/app/interfaces/user-entyty.interface';
// import { ILoginForm } from 'src/app/login-page/interfaces/login.form.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  // defaultUser: ILoginForm = {
  //   email: '',
  //   password: ''
  // };
  usersData: IUserEntyty[]

  constructor(private http: HttpClient) { }

  logIn(): Promise<any> {
    return fetch('http://localhost:3000/users');
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('currentUser'))
  }

  getUserInfo(email: string): Promise<any> {
    return fetch(`http://localhost:3000/users/?email=${email}`)
  }
}