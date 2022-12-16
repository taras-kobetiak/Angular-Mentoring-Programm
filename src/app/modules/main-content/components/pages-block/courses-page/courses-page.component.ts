import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICoursePage } from 'src/app/interfaces/course.interface';
import { CurrentCourseSelector } from 'src/app/state/courses/courses.selector';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesPageComponent {



  @Input() course: ICoursePage;
  @Output() deleteClicked: EventEmitter<string> = new EventEmitter();
  @Output() starClicked: EventEmitter<ICoursePage> = new EventEmitter();


  constructor(private store: Store) { }

  onDeleteClicked(): void {
    this.deleteClicked.emit(this.course.id);
  }

  onStarClicked(): void {
    this.starClicked.emit(this.course);
  }
}







