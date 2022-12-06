import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { BehaviorSubject, Observable } from 'rxjs';

import { IUserEntyty } from 'src/app/interfaces/user-entyty.interface';
import { isLoginFalse } from 'src/app/store/actions/isLogin.action';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  usersData: IUserEntyty[];
  // isAuth$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasToken());

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


    this.store.dispatch(isLoginFalse());


    // this.isAuth$.next(false);
  }

  // isAuthenticated(): Observable<boolean> {
  //   return this.isAuth$.asObservable();
  // }

  getUserInfo(email: string): Observable<IUserEntyty[]> {
    return this.http.get<IUserEntyty[]>(`users/?email=${email}`);
  }

  private hasToken(): boolean {
    return Boolean(localStorage.getItem('token'));
  }
}
