import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICoursePage } from 'src/app/interfaces/course.interface';
import { CurrentCourseSelector } from 'src/app/state/courses/courses.selector';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {

  breadcrumbsTitle: string = '';
  title$: Observable<ICoursePage | undefined> = this.store.select(CurrentCourseSelector);

  constructor(private store: Store) { }
}
