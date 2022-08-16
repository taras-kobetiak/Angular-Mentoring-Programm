import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICoursePage } from '../interfaces/course.interface';
import { CoursesService } from './services/courses.service';

const NUMBER_OF_ADD_COURSES: number = 3;

@Component({
  selector: 'app-pages-block',
  templateUrl: './pages-block.component.html',
  styleUrls: ['./pages-block.component.scss'],
})
export class PagesBlockComponent implements OnInit {

  @Output() addButtonClicked: EventEmitter<void> = new EventEmitter()

  showLoadMore:boolean = true;
  courses: ICoursePage[] = [];
  numberOfCourses: number = 3;
  allCoursesLengthWithTimeLag: number = 0;
  constructor(private coursesPagesService: CoursesService) { }

  ngOnInit(): void {
    this.refreshCourse();
     }

deleteComponent(id: string): void {
    if (confirm('Do you really want to delete this course? Yes/No')) {
      this.coursesPagesService.deleteCourse(id).then(()=>{
        this.refreshCourse();
      })
    }
  }

loadNewCourses(): void {
  this.numberOfCourses +=  NUMBER_OF_ADD_COURSES;
  this.coursesPagesService.getCoursesList(this.numberOfCourses)
    .then((courseData)=> {
      this.courses = courseData;
    })
    .then (()=>{
      if (this.allCoursesLengthWithTimeLag === this.courses.length) {
        this.showLoadMore = false;
      }
      this.allCoursesLengthWithTimeLag = this.courses.length;
    })
  }

  changeRate(course: ICoursePage): void {
    course.topRated = !course.topRated;
          this.coursesPagesService.updateCourse(course);
  }

 findCourse(inputData: string): void {
    if (inputData) {
      this.coursesPagesService.getFilteredList(inputData.toLowerCase())
        .then((courseData)=>  this.courses =courseData)
    } else {
      this.refreshCourse();
    }
  }

refreshCourse(): void {
 this.coursesPagesService.getCoursesList(this.numberOfCourses)
  .then((courseData)=> {
    this.courses =courseData;
    this.allCoursesLengthWithTimeLag = this.courses.length;
  })
  }
}
