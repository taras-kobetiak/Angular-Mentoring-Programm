import { Component, OnInit, forwardRef, } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDurationComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CourseDurationComponent),
      multi: true
    },
  ]
})
export class CourseDurationComponent implements OnInit, ControlValueAccessor, Validator {


  duration$: FormControl = new FormControl();
  onChange = (value: any) => { };
  onTouched = () => { };

  ngOnInit(): void {
    this.duration$.valueChanges.subscribe(duration => {
      if (this.onChange) {
        this.onChange(duration);

      }
    })
  }

  writeValue(obj: any): void {
    this.duration$.setValue(obj);

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const regex = /^\d+$/;
    return !regex.test(control.value) ? { durationInvalid: true } :
      null;
  }


  touched() {
    this.onTouched();
  }



}
