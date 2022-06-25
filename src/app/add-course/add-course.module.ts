import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddCoursePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AddCoursePageComponent]
})
export class AddCourseModule { }
