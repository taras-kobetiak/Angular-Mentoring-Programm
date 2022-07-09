import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ICoursePage } from '../interfaces/course.interface';
import { CoursesService } from '../pages-block/services/courses.service';



@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements DoCheck, OnChanges {

  courseId: string;
  course: ICoursePage;
  breadcrumbpsTitle: string;

  constructor(private router: Router, private courseService: CoursesService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(1);
  }


  ngDoCheck(): void {
    const regEx = /\d+/
    const url: string = this.router.url
    const res: RegExpMatchArray | null = url.match(regEx);

    this.courseId = res ? res[0] : '';

    if (this.courseId) {
      this.course = this.courseService.getCourseById(this.courseId)!
      this.breadcrumbpsTitle = ` / ${this.course.title}`;
    } else {
      this.breadcrumbpsTitle = ''
    }
  }
}
