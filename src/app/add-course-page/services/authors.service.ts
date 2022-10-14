import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthors } from 'src/app/interfaces/authors.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  getFilteredAuthorsList(inputData: string): Observable<IAuthors[]> {
    return this.http.get<IAuthors[]>(`authors/?q=${inputData}`);
  }

}
