import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserEntyty } from 'src/app/interfaces/user-entyty.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  usersData: IUserEntyty[]

  constructor(private http: HttpClient) { }

  async logIn(): Promise<any> {
    let userData = await fetch('http://localhost:3000/users');
    return await userData.json()
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('currentUser'))
  }

  async getUserInfo(email: string): Promise<any> {
    let userData = await fetch(`http://localhost:3000/users/?email=${email}`);
    return await userData.json();
  }
}