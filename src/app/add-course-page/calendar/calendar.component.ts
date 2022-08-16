import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  @Input() creationDate: Date | string;
  @Output() creationDateChange: EventEmitter<Date> = new EventEmitter()

  onCreationDateChange(date: Date): void {
    this.creationDateChange.emit(date)
  }
}
