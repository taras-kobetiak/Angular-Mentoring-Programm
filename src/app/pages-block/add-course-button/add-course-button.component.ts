import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-course-button',
  templateUrl: './add-course-button.component.html',
  styleUrls: ['./add-course-button.component.scss']
})
export class AddCourseButtonComponent {

  @Output() addButtonClicked: EventEmitter<void> = new EventEmitter()

  onAddButtonClick(): void {
    this.addButtonClicked.emit()
  }
}