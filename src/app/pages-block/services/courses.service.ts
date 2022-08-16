import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoursePage } from 'src/app/interfaces/classes';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  course: CoursePage;

  constructor(private http: HttpClient) { }

getCoursesList(courseLimit: number): Promise<CoursePage[]> {
    return fetch(`http://localhost:3000/courses?_limit=${courseLimit}`)
      .then((courses: Response) => courses.json());
  }

 getAllCoursesList(): Promise<CoursePage[]> {
   return  fetch(`http://localhost:3000/courses`)
      .then((courses: Response) => courses.json());
  }

 getFilteredList(searchData: string):  Promise<CoursePage[]> {
    return   fetch(`http://localhost:3000/courses?q=${searchData}`)
  .then((courses: Response) => courses.json());
  }

  addCourses(course: CoursePage):  Promise<Response> {
    return fetch('http://localhost:3000/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(course)
    })
  }

  deleteCourse(id: string): Promise<Response> {
    return fetch(`http://localhost:3000/courses/${id}`, {
      method: 'DELETE',
    })
  }

getCourseById(id: string): Promise<CoursePage> {
   return fetch(`http://localhost:3000/courses/${id}`).then((user:Response)=> user.json());
  }

  updateCourse(course: CoursePage): Promise<Response> {
    return fetch(`http://localhost:3000/courses/${course.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(course)
    })
  }
}
