import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';



@NgModule({
  declarations: [
    AddCoursePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AddCoursePageComponent]
})
export class AddCourseModule { }
