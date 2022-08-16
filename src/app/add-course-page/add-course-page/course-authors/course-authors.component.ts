import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.scss']
})
export class CourseAuthorsComponent {
  @Input() authors: string;
  @Output() authorsSubmit: EventEmitter<string> = new EventEmitter()

  onAuthorsSubmit(): void {
    this.authorsSubmit.emit(this.authors)
  }
}
