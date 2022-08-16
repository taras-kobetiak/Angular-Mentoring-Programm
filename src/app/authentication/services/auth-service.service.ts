import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserEntyty } from 'src/app/interfaces/user-entyty.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  usersData: IUserEntyty[]

  constructor(private http: HttpClient) { }

 logIn(): Promise<IUserEntyty[]> {
return fetch('http://localhost:3000/users').then((userData: Response)=> userData.json())
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('currentUser'))
  }

 getUserInfo(email: string): Promise<IUserEntyty[]> {
    return fetch(`http://localhost:3000/users/?email=${email}`).then((userData: Response)=> userData.json())
  }
}
