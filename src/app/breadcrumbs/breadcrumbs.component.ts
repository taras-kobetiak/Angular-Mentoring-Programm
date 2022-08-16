import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { ICoursePage } from '../interfaces/course.interface';
import { CoursesService } from '../pages-block/services/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements DoCheck {

  courseId: string;
  course: ICoursePage;
  breadcrumbsTitle: string = '';

  constructor(private router: Router, private courseService: CoursesService) { }

  ngDoCheck(): void {
    const regEx = /\d+/;
    const url: string = this.router.url;
    const res: RegExpMatchArray | null = url.match(regEx);

    this.courseId = res ? res[0] : '';

    if (this.courseId) {
      this.setBreadcrumbs();
    } else {
      this.breadcrumbsTitle = '';
    }
  }

 setBreadcrumbs(): void {
    if (this.breadcrumbsTitle) {
      return;
    } else {
     this.courseService.getCourseById(this.courseId).then((course:ICoursePage)=> {
       this.course = course;
       this.breadcrumbsTitle = ` / ${this.course.title}`;
        })
    }
  }
}
