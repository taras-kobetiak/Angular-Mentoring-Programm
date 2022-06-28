import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent {

  @Output() saveButtonClick: EventEmitter<void> = new EventEmitter()
  @Output() cancelButtonClick: EventEmitter<void> = new EventEmitter()

  title: string;
  description: string;
  date: Date;
  duration: number;
  authors: string;

  onSubmit(form: any): void {
    console.log(form.value);
    this.saveButtonClick.emit();
  }

  onCancelButtonClick(): void {
    this.cancelButtonClick.emit()
  }

}