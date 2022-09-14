import { Component, Input, Output, EventEmitter } from '@angular/core';


export const DateFormat = {
  parse: {
    dateInput: 'input',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'MM/DD/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @Input() creationDate: string;
  @Output() creationDateChange: EventEmitter<string> = new EventEmitter();

  onCreationDateChange(): void {
    this.creationDateChange.emit(this.creationDate);
  }
}
