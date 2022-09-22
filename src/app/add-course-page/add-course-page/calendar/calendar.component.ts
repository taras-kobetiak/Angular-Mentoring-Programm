import { Component, OnInit, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import * as _moment from 'moment';

import { Moment } from 'moment';

// I don`t understand whe angular material tell me to create this const

// import { default as _rollupMoment, } from 'moment';
// const moment = _rollupMoment || _moment;

export const DateFormat = {
  parse: {
    dateInput: 'DD/MM/YYYY',
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
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CalendarComponent),
      multi: true
    },
  ]
})
export class CalendarComponent implements OnInit, ControlValueAccessor, Validator {

  onChange: any;
  onTouched: any;
  creationDate$ = new FormControl();


  ngOnInit(): void {
    this.creationDate$.valueChanges.subscribe(creationDate => {
      if (this.onChange) {
        this.onChange(creationDate);
      }
    })
  }

  writeValue(obj: any): void {
    this.creationDate$.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  touched() {
    this.onTouched();
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return !control.value ? { dateInvalid: true } :
      null;
  }

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.creationDate$.value;

    if (ctrlValue && ctrlValue.date) {
      ctrlValue.date(normalizedMonthAndYear.date());
      ctrlValue.month(normalizedMonthAndYear.month());
      ctrlValue.year(normalizedMonthAndYear.year());
      this.creationDate$.setValue(ctrlValue);
      datepicker.close();
    }
  }
}