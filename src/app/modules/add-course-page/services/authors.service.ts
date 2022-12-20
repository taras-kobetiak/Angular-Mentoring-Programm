import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor } from 'src/app/interfaces/authors.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  getFilteredAuthorsList(inputData: string): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(`authors/?q=${inputData}`);
  }
}
