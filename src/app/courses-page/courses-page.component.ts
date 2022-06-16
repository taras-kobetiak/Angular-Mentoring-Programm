import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoursePage } from '../interfaces/classes';


@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  @Input() course: CoursePage;
  @Output() deleteClicked: EventEmitter<number> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();

  upcoming: boolean = false;
  fresh: boolean = false;
  milisecToDay: number = 1000 * 60 * 60 * 24;

  ngOnInit(): void {
    this.createFreshBorder()
    this.createUpcomingBorder()
  }

  onDeleteClicked() {
    this.deleteClicked.emit(this.course.id)
  }

  onEditClicked() {
    this.editClicked.emit()
    this.createUpcomingBorder()
  }

  createFreshBorder(): void {
    if ((+this.course.creationDate - +new Date()) / this.milisecToDay > -14 &&
      +this.course.creationDate - +new Date() < 0) {

      console.log((+this.course.creationDate - +new Date()) / this.milisecToDay);


      this.fresh = true;
    }
  }

  createUpcomingBorder(): void {
    if ((+this.course.creationDate - +new Date()) > 0) {
      this.upcoming = true;
    }

  }

}


