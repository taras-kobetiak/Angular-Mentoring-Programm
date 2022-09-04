import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoursePage } from 'src/app/interfaces/classes';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  course: CoursePage;
  currentCourseTitle$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  getCoursesList(courseLimit: number): Observable<CoursePage[]> {
    return this.http.get<CoursePage[]>(`http://localhost:3000/courses?_limit=${courseLimit}`);
  }

  getAllCoursesList(): Observable<CoursePage[]> {
    return this.http.get<CoursePage[]>(`http://localhost:3000/courses`);
  }

  getFilteredList(searchData: string): Observable<CoursePage[]> {
    return this.http.get<CoursePage[]>(`http://localhost:3000/courses?q=${searchData}`);
  }

  addCourses(course: CoursePage): Observable<CoursePage> {
    return this.http.post<CoursePage>('http://localhost:3000/courses', course);
  }

  deleteCourse(id: string): Observable<CoursePage> {
    return this.http.delete<CoursePage>(`http://localhost:3000/courses/${id}`);
  }

  getCourseById(id: string): Observable<CoursePage> {
    return this.http.get<CoursePage>(`http://localhost:3000/courses/${id}`);
  }

  updateCourse(course: CoursePage): Observable<CoursePage> {
    return this.http.put<CoursePage>(`http://localhost:3000/courses/${course.id}`, course);
  }
}
