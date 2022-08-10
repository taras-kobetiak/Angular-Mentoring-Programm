import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements DoCheck {

  @Input() creationDate: Date | string;
  @Output() creationDateChange: EventEmitter<Date> = new EventEmitter()

  placeholderData: string;

  ngDoCheck(): void {
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
