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

  constructor(private coursesPagesService: CoursesService) { }

  async ngOnInit(): Promise<void> {
    await this.refreshCourse().then((courseData: ICoursePage[]) => this.courses = courseData.slice(0, 3));
  }

  async deleteComponent(id: string): Promise<void> {
    if (confirm('Do you really want to delete this course? Yes/No')) {
      await this.coursesPagesService.deleteCourse(id)
        .then(() => this.refreshCourse()
          .then((courseData: ICoursePage[]) => this.courses = courseData.slice(0, this.numberOfCourses)))
    }
  }

  async loadNewCourses(): Promise<void> {
    this.numberOfCourses += 3;
    await this.refreshCourse().then((courseData: ICoursePage[]) => this.courses = courseData.slice(0, this.numberOfCourses))
  }

  changeRate(course: ICoursePage): void {
    course.topRated = !course.topRated;
    this.coursesPagesService.updateCourse(course);
  }

  async findClick(inputData: string): Promise<void> {
    if (inputData) {
      let findData = inputData.toLowerCase();
      await this.refreshCourse()
        .then((courseData: ICoursePage[]) => {
          this.courses = courseData.filter(course => course.title.toLowerCase().includes(findData)
            || course.description.toLowerCase().includes(findData))
        })
    } else {
      await this.refreshCourse().then((courseData: ICoursePage[]) => this.courses = courseData.slice(0, 3));
    }
  }

  refreshCourse(): Promise<ICoursePage[]> {
    return this.coursesPagesService.getCoursesList()
      .then((response) => {
        return response.json();
      })
  }
}