import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CourseDurationComponent),
    multi: true
  }]
})
export class CourseDurationComponent implements OnInit, ControlValueAccessor {

  onChange: any;
  onTouhed: any;
  durationControl$: FormControl = new FormControl();

  ngOnInit(): void {
    this.durationControl$.valueChanges.subscribe(duration => {
      if (this.onChange) {
        this.onChange(duration);
      }
    })
  }

  writeValue(obj: any): void {
    this.durationControl$.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouhed = fn;
  }
}
