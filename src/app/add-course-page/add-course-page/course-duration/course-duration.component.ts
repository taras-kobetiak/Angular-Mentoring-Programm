import { Component, OnInit, forwardRef, } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, } from '@angular/forms';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDurationComponent),
      multi: true
    }
  ]
})
export class CourseDurationComponent implements OnInit, ControlValueAccessor {

  duration: FormControl = new FormControl();
  onChange = (value: any) => { };
  onTouched = () => { };

  ngOnInit(): void {
    this.duration.valueChanges.subscribe(duration => {
      if (this.onChange) {
        this.onChange(duration);
      }
    })
  }

  writeValue(obj: number): void {
    this.duration.setValue(obj);
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
}
