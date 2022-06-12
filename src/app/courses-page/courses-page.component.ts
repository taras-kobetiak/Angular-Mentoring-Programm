import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoursePage } from '../interfaces/classes';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  @Input() course!: CoursePage;
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();




  ngOnInit(): void {
  }


  onDeleteClicked() {

    this.deleteClicked.emit()

  }

  onEditClicked() {
    this.editClicked.emit()
  }


}


