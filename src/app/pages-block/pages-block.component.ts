import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoursePage } from '../interfaces/classes';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-pages-block',
  templateUrl: './pages-block.component.html',
  styleUrls: ['./pages-block.component.scss'],
})

export class PagesBlockComponent implements OnInit {

  @Output() addButtonClicked: EventEmitter<void> = new EventEmitter()

  courses: CoursePage[] = [];

  constructor(private coursesPagesService: CoursesService) { }

  deleteComponent(id: number): void {
    if (confirm('Do you really want to delete this course? Yes/No')) {
      this.courses = this.coursesPagesService.deleteCourse(id)
    }
  }

  loadNewCourses(): void {
    console.log('here is come action');
  }

  changeRate(course: CoursePage): void {
    this.coursesPagesService.updateCourse(course)
  }

  findClick(inputData: string): void {

    this.courses.sort((a, b) => isInclude(b.title, inputData)
      && !isInclude(a.title, inputData) ? 1 : -1)

    function isInclude(title: string, inputData: string): boolean {
      return title.toLowerCase().includes(inputData.toLowerCase())
    }
  }

  ngOnInit(): void {
    this.courses = this.coursesPagesService.getCoursesList()
  }
}