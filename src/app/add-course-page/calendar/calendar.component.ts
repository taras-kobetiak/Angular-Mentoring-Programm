import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements  OnInit {

  @Input() creationDate: Date | string;
  @Output() creationDateChange: EventEmitter<Date> = new EventEmitter()

  placeholderData: string;

  ngOnInit() {
    if (this.creationDate === '') {
      this.placeholderData = 'Choose a date';
    } else {
      let temporaryDate: Date = new Date(this.creationDate);
      this.placeholderData = `${temporaryDate.getDate()}/${temporaryDate.getMonth()}/${temporaryDate.getFullYear()}`
    }
  }


  onCreationDateChange(date: Date): void {
    this.creationDateChange.emit(date)
  }

}
