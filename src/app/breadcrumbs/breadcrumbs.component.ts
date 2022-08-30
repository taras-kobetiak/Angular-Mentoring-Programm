import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ICoursePage } from '../interfaces/course.interface';
import { CoursesService } from '../pages-block/services/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {


  course: ICoursePage;
  breadcrumbsTitle: string = '';
  private currentSubscribes: Subject<void> = new Subject<void>();

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.courseService.currentCourseId.pipe(
      takeUntil(this.currentSubscribes)
    ).subscribe((courseId: string) => {
      if (courseId) {
        this.courseService.getCourseById(courseId).pipe(
          takeUntil(this.currentSubscribes)
        ).subscribe((course: ICoursePage) => {
          this.course = course;
          this.breadcrumbsTitle = ` / ${this.course.title}`;
        });
      } else {
        this.breadcrumbsTitle = '';
      }
    });
  }

  ngOnDestroy(): void {
    this.currentSubscribes.next();
    this.currentSubscribes.complete();
  }
}
