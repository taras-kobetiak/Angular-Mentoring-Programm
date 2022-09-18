import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseAuthorsComponent } from './add-course-page/course-authors/course-authors.component';
import { CourseDurationComponent } from './add-course-page/course-duration/course-duration.component';
import { CalendarComponent, DateFormat } from './calendar/calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    AddCoursePageComponent,
    CourseAuthorsComponent,
    CourseDurationComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_DATE_FORMATS, useValue: DateFormat }
  ],
  exports: [AddCoursePageComponent]
})
export class AddCoursePageModule { }
