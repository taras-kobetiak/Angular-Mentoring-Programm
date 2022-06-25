import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {

  @Output() saveButtonClick: EventEmitter<void> = new EventEmitter()
  @Output() cancelButtonClick: EventEmitter<void> = new EventEmitter()

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form.value);
    this.saveButtonClick.emit();
  }

  onCancelButtonClick() {
    this.cancelButtonClick.emit()
  }

}
