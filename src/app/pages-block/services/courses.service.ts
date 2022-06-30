import { Injectable } from '@angular/core';
import { CoursePage } from 'src/app/interfaces/classes';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courses: CoursePage[] = [
    new CoursePage('1', 'First', new Date(2025, 1, 12), 121, 'Some description Lorem ipsum dolor sit amet dolor sit amet consectetur consectetur dolor sit amet consectetur, adipisicing elit. Asperiores, est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, itaque.'),
    new CoursePage('2', 'Second', new Date(2022, 5, 17), 59, 'Not good course.'),
    new CoursePage('3', 'Third', new Date(2021, 5, 3), 96, 'Some description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, itaque.'),
    new CoursePage('12', 'Second', new Date(2022, 5, 17), 59, 'Not good course.'),
    new CoursePage('22', 'Second', new Date(2022, 5, 17), 59, 'Not good course.'),
    new CoursePage('3322', 'Second', new Date(2022, 5, 17), 59, 'Not good course.'),
  ];
  course: CoursePage;

  getCoursesList(): CoursePage[] {
    return this.courses
  }

  addCourses(course: CoursePage): void {
    this.courses = this.courses.concat(course)
  }

  deleteCourse(id: string): CoursePage[] {
    return this.courses = this.courses.filter(el => el.id !== id);
  }

  getCourseById(id: string): CoursePage {
    return this.course = this.courses.filter(course => course.id === id)[0]
  }

  updateCourse(course: CoursePage): void {
    let index = this.courses.findIndex(item => item.id === course.id)
    this.courses[index] = course;
  }
}
