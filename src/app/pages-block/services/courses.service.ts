import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoursePage } from 'src/app/interfaces/classes';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  course: CoursePage;
  // serverPath: string = 'http://localhost:3000'
  currentCourseTitle$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  getCoursesList(courseLimit: number): Observable<CoursePage[]> {
    return this.http.get<CoursePage[]>(`courses?_limit=${courseLimit}`);
  }

  getAllCoursesList(): Observable<CoursePage[]> {
    return this.http.get<CoursePage[]>(`courses`);
  }

  getFilteredList(searchData: string): Observable<CoursePage[]> {
    return this.http.get<CoursePage[]>(`courses?q=${searchData}`);
  }

  addCourses(course: CoursePage): Observable<CoursePage> {
    return this.http.post<CoursePage>(`courses`, course);
  }

  deleteCourse(id: string): Observable<CoursePage> {
    return this.http.delete<CoursePage>(`courses/${id}`);
  }

  getCourseById(id: string): Observable<CoursePage> {
    return this.http.get<CoursePage>(`courses/${id}`);
  }

  updateCourse(course: CoursePage): Observable<CoursePage> {
    return this.http.put<CoursePage>(`courses/${course.id}`, course);
  }
}
