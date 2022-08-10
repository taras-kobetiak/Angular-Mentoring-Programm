import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICoursePage } from '../interfaces/course.interface';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-pages-block',
  templateUrl: './pages-block.component.html',
  styleUrls: ['./pages-block.component.scss'],
})

export class PagesBlockComponent implements OnInit {

  @Output() addButtonClicked: EventEmitter<void> = new EventEmitter()

  courses: ICoursePage[] = [];
  numberOfCourses: number = 3;
  allCoursesLength: number;

  constructor(private coursesPagesService: CoursesService) { }

  ngOnInit(): void {
    this.refreshCourse();
    this.allCoursesLengthFunction();
  }

  async deleteComponent(id: string): Promise<void> {
    if (confirm('Do you really want to delete this course? Yes/No')) {
      await this.coursesPagesService.deleteCourse(id);
      this.allCoursesLengthFunction();
      this.refreshCourse();
    }
  }

  async loadNewCourses(): Promise<void> {
    this.numberOfCourses += 3;
    await this.refreshCourse();
  }

  changeRate(course: ICoursePage): void {
    course.topRated = !course.topRated;
    this.coursesPagesService.updateCourse(course);
  }

  async findClick(inputData: string): Promise<void> {
    if (inputData) {
      let findData = inputData.toLowerCase();
      this.courses = await this.coursesPagesService.getFilteredList(findData);
    } else {
      this.refreshCourse();
    }
  }

  async refreshCourse(): Promise<void> {
    let courseData = await this.coursesPagesService.getCoursesList(this.numberOfCourses);
    this.courses = courseData;
  }

  async allCoursesLengthFunction(): Promise<void> {
    let coursesList = await this.coursesPagesService.getAllCoursesList();
    this.allCoursesLength = coursesList.length;
  }
}