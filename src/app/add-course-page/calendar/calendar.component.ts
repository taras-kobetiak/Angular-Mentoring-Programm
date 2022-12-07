import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  // styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  @Input() creationDate: string;
  @Output() creationDateChange: EventEmitter<string> = new EventEmitter();

  onCreationDateChange(date: string): void {
    this.creationDateChange.emit(date);
  }
}
