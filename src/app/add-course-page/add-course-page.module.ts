import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { FormsModule } from '@angular/forms';
import { CourseAuthorsComponent } from './add-course-page/course-authors/course-authors.component';
import { CourseDurationComponent } from './add-course-page/course-duration/course-duration.component';



@NgModule({
  declarations: [
    AddCoursePageComponent,
    CourseAuthorsComponent,
    CourseDurationComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AddCoursePageComponent]
})
export class AddCoursePageModule { }
