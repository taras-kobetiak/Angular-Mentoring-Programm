import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICoursePage } from 'src/app/interfaces/course.interface';
import { CoursesService } from 'src/app/pages-block/services/courses.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {

  course: ICoursePage = {
    id: '',
    title: '',
    creationDate: new Date(),
    durationInMinutes: 0,
    description: '',
    topRated: false
  }

  authors: string;
  courseId: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private courseService: CoursesService) { }

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.courseService.getCourseById(this.courseId)) {
      this.course = this.courseService.getCourseById(this.courseId);
    }
  }

  onSubmit(): void {
    this.durationSubmit(this.course.durationInMinutes)

    if (this.course.id) {

      this.courseService.updateCourse(this.course)
    } else {
      this.courseService.addCourses(this.course)
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