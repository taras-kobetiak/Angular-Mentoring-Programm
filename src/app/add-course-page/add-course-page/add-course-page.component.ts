import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICoursePage } from 'src/app/interfaces/course.interface';
import { DurationPipe } from 'src/app/pages-block/pipes/duration.pipe';
import { CoursesService } from 'src/app/pages-block/services/courses.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {

  course: ICoursePage;
  title: string;
  description: string;
  creationDate: any;
  durationInMinutes: number;
  authors: string;


  courseId: any;


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private courseService: CoursesService) { }


  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.courseService.getCourseById(this.courseId)) {
      this.course = this.courseService.getCourseById(this.courseId);
      this.title = this.course.title;
      this.description = this.course.description
      this.creationDate = this.course.creationDate;
      this.durationInMinutes = this.course.durationInMinutes;
    }
  }

  onSubmit(): void {
    if (this.course.id) {
      this.courseService.updateCourse(this.course)
    } else {
      console.log(1);

      console.log(this.course);

      this.course.id = '12'
      this.courseService.addCourses(this.course)
    }


    this.router.navigate(['courses'])

  }

  onCancelButtonClick(): void {
    this.router.navigate(['/courses'])
  }

  durationSubmit(duration: number): void {
    this.course.durationInMinutes = duration;
  }

  authorsSubmit(authors: string): void {
    this.authors = authors;
  }
}