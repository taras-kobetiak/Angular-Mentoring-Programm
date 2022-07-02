import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICoursePage } from '../interfaces/course.interface';
import { CoursesService } from '../pages-block/services/courses.service';



@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements DoCheck {

  courseId: string | null;
  course: ICoursePage;
  breadcrumbpsTitle: string;

  constructor(private router: Router, private courseService: CoursesService) { }

  ngDoCheck(): void {
    let idData: string | string[] = this.router.url;
    idData = idData.split('/');

    if (idData.length === 3 && idData[2] != 'new') {
      this.courseId = idData[2];
    }

    if (this.courseId) {
      this.course = this.courseService.getCourseById(this.courseId)
      this.breadcrumbpsTitle = ` / ${this.course.title}`;
    }
  }
}
