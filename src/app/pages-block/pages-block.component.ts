import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoursePage } from '../interfaces/classes';
import { FoundCoursesPipe } from './pipes/found-courses.pipe';
import { CoursesService } from './services/courses.service';


@Component({
  selector: 'app-pages-block',
  templateUrl: './pages-block.component.html',
  styleUrls: ['./pages-block.component.scss'],
})

export class PagesBlockComponent implements OnInit {

  @Output() addButtonClicked: EventEmitter<void> = new EventEmitter()

  courses: CoursePage[] = [];

  constructor(private coursesPagesService: CoursesService) {
  }

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
    FoundCoursesPipe.prototype.transform(this.courses, inputData)
  }

  ngOnInit(): void {
    this.courses = this.coursesPagesService.getCoursesList()
      .sort((a, b) => +b.creationDate - +a.creationDate);
  }
}