import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { IUserEntyty } from 'src/app/interfaces/user-entyty.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  usersData: IUserEntyty[];

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logIn(): Observable<IUserEntyty[]> {
    return this.http.get<IUserEntyty[]>('users');
  }

  logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }

  getUserInfo(email: string): Observable<IUserEntyty[]> {
    return this.http.get<IUserEntyty[]>(`users/?email=${email}`);
  }

  private hasToken(): boolean {
    return Boolean(localStorage.getItem('token'));
  }
}
