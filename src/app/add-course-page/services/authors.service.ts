import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthors } from 'src/app/interfaces/authors.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  getFilteredAuthorsList(name: string) {
    return this.http.get<IAuthors>(`authors/?q=${name}`);
  }

}
