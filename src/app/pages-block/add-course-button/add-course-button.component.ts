import { Component } from '@angular/core';

@Component({
  selector: 'app-add-course-button',
  templateUrl: './add-course-button.component.html',
  styleUrls: ['./add-course-button.component.scss']
})
export class AddCourseButtonComponent {

  onAddButtonClick(): void {
    console.log('Here will be some act connecting to adding courses');
  }
}
