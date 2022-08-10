import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoursePage } from 'src/app/interfaces/classes';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  course: CoursePage;

  constructor(private http: HttpClient) { }

  async getCoursesList(courseLimit: number): Promise<any> {
    let serverData = await fetch(`http://localhost:3000/courses?_sort=id&_limit=${courseLimit}`);
    return await serverData.json();
  }


  async getFilteredList(searchData: string): Promise<any> {
    let serverData = await fetch(`http://localhost:3000/courses?q=${searchData}`);
    return await serverData.json();
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

  async getCourseById(id: string): Promise<any> {
    let serverData = await fetch(`http://localhost:3000/courses/${id}`);
    return await serverData.json();
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
