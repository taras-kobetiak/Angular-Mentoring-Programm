import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { FormsModule } from '@angular/forms';
import { CourseAuthorsComponent } from './add-course-page/course-authors/course-authors.component';
import { CourseDurationComponent } from './add-course-page/course-duration/course-duration.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

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
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule

  ],
  exports: [AddCoursePageComponent]
})
export class AddCoursePageModule { }
