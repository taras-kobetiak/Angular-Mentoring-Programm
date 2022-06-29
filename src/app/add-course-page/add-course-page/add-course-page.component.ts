import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  duration: number = 134;
  authors: string = 'asdas';

  onSubmit(form: NgForm): void {
    this.saveButtonClick.emit();
    console.log(form.value);
    console.log(this.duration);
    console.log(this.authors);
  }

  onCancelButtonClick(): void {
    this.cancelButtonClick.emit()
  }

  durationSubmit(duration: number): void {
    this.duration = duration;
  }

  authorsSubmit(authors: string): void {
    this.authors = authors;
  }
}