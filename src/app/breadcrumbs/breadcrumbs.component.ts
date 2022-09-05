import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CoursesService } from '../pages-block/services/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  breadcrumbsTitle: string = '';
  private unsubscribingData$: Subject<void> = new Subject<void>();

  constructor(public courseService: CoursesService) { }

  ngOnInit(): void {

    this.courseService.currentCourseTitle$.pipe(
      takeUntil(this.unsubscribingData$)
    ).subscribe((currentTitle) => {
      this.breadcrumbsTitle = currentTitle;
    })
  }

  ngOnDestroy(): void {
    this.unsubscribingData$.next();
    this.unsubscribingData$.complete();
  }
}
