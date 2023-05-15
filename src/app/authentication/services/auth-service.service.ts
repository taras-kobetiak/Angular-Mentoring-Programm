import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserEntyty } from 'src/app/interfaces/user-entyty.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }

  getUserInfo(currentUser: IUserEntyty): Observable<IUserEntyty[]> {
    return this.http.get<IUserEntyty[]>(`users/?email=${currentUser.email}&password=${currentUser.password}`);
  }
}
