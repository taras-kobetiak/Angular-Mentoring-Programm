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

  course: ICoursePage;
  defaultCourseData: ICoursePage = {
    id: '',
    title: '',
    creationDate: new Date(),
    duration: 0,
    description: '',
    topRated: false
  }

  authors: string;
  courseId: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private courseService: CoursesService) { }

  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    this.course = this.courseService.getCourseById(this.courseId) || this.defaultCourseData;
  }

  onSubmit(): void {
    this.course.id ? this.updateCourse() :
      this.newCourse()

    this.router.navigate(['courses'])
  }

  onCancelButtonClick(): void {
    this.router.navigate(['/courses'])
  }

  creationDateChange(creationDate: Date) {
    this.course.creationDate = creationDate;
  }

  durationChange(duration: number): void {
    this.course.duration = duration;
  }

  authorsSubmit(authors: string): void {
    this.authors = authors;
  }

  updateCourse(): void {
    this.course.creationDate = new Date(this.course.creationDate);
    this.courseService.updateCourse(this.course);
  }

  newCourse(): void {
    this.course.id = Math.floor(Math.random() * 100000000) + ''
    this.course.creationDate = new Date(this.course.creationDate);
    this.courseService.addCourses(this.course);
  }
}