import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoursePage } from 'src/app/interfaces/classes';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  course: CoursePage;

  constructor(private http: HttpClient) { }

  getCoursesList(): Promise<any> {
    return fetch('http://localhost:3000/courses')
  }

  addCourses(course: CoursePage): Promise<any> {
    return fetch('http://localhost:3000/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(course)
    })
  }

  deleteCourse(id: string): Promise<any> {
    return fetch(`http://localhost:3000/courses/${id}`, {
      method: 'DELETE',
    })
  }

  getCourseById(id: string): Promise<any> {
    return fetch(`http://localhost:3000/courses/${id}`);
  }

  updateCourse(course: CoursePage): Promise<any> {
    return fetch(`http://localhost:3000/courses/${course.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(course)
    })
  }
}
