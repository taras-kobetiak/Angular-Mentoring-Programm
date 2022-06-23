import { Component, OnInit } from '@angular/core';
import { CoursePage } from '../interfaces/classes';
import { FoundCoursesPipe } from './pipes/found-courses.pipe';
import { CoursesService } from './services/courses.service';


@Component({
  selector: 'app-pages-block',
  templateUrl: './pages-block.component.html',
  styleUrls: ['./pages-block.component.scss'],
  providers: [CoursesService]
})

export class PagesBlockComponent implements OnInit {

  courses: CoursePage[] = [];

  constructor(private coursesPages: CoursesService) {
    this.courses = coursesPages.getCoursesList();
  }

  addCourses() {
    this.coursesPages.addCourses(new CoursePage(231, 'Seconasdfasf', new Date(2020, 5, 21), 59, 'Not good course.'))
  }

  deleteComponent(id: number) {
    if (confirm('Do you really want to delete this course? Yes/No')) {
      this.courses = this.coursesPages.deleteCourse(id)
    }
  }

  loadNewCourses() {
    console.log('here is come action');
  }


  editComponent(course: CoursePage): void {
    console.log(course.description);
  }

  changeRate(course: CoursePage): void {
    this.coursesPages.updateCourse(course)
  }

  findClick(inputData: string) {
    FoundCoursesPipe.prototype.transform(this.courses, inputData)
  }

  ngOnInit(): void {
    this.courses.sort((a, b) => +b.creationDate - +a.creationDate);
  }

}