import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {


  @Input() creationDate: string;
  @Output() creationDateChange: EventEmitter<string> = new EventEmitter()

  placeholderData: string;
  pickerDate: Date;

  ngOnInit() {
    if (this.creationDate === '') {
      this.placeholderData = 'Choose a date';
      this.pickerDate = new Date();
    } else {
      this.pickerDate = new Date(this.creationDate);
      this.placeholderData = `${this.pickerDate.getDate()}/${this.pickerDate.getMonth()}/${this.pickerDate.getFullYear()}`
    }
  }

  onCreationDateChange(date: string): void {
    this.creationDateChange.emit(date);
  }

}
