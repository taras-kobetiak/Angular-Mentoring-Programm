import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CoursePage } from '../../interfaces/classes';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent {

  @Input() course: CoursePage;
  @Output() deleteClicked: EventEmitter<number> = new EventEmitter();
  @Output() starClicked: EventEmitter<boolean> = new EventEmitter()

  onDeleteClicked(): void {
    this.deleteClicked.emit(this.course.id)
  }

  onStarClicked(): void {
    this.starClicked.emit(this.course.topRated)
  }
}






