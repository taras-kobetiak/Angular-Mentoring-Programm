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

  courseCreationDate: Date | string = '';

  courses: ICoursePage[];
  course: ICoursePage;
  temporaryId: number = 1;
  authors: string;
  courseId: any;

  defaultCourseData: ICoursePage = {
    id: '',
    title: '',
    creationDate: new Date(),
    duration: 0,
    description: '',
    topRated: false
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private courseService: CoursesService) { }

  ngOnInit(): void {
    this.course = this.defaultCourseData;
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.courseId) {
      this.takeCourseData();
    }
  }

  onSubmit(): void {
    this.course.id ? this.updateCourse() :
      this.addNewCourse();
  }

  onCancelButtonClick(): void {
    this.router.navigate(['/courses']);
  }

  creationDateChange(creationDate: Date): void {
    this.course.creationDate = creationDate;
  }

  durationChange(duration: number): void {
    this.course.duration = duration;
  }

  authorsSubmit(authors: string): void {
    this.authors = authors;
  }

updateCourse(): void {
 this.courseService.updateCourse(this.course)
   .then(()=>    this.router.navigate(['/courses']))
  }

  addNewCourse(): void {
    this.courseService.getAllCoursesList()
      .then((courseData) => {
        this.courses = courseData;
        this.generateId();
        this.course.id = this.temporaryId + '';
        this.courseService.addCourses(this.course);
        this.router.navigate(['/courses']);
    })
  }

  generateId(): void {
    while(this.courses.find(course => course.id === this.temporaryId.toString())) {
      this.temporaryId++;
    }
  }

 takeCourseData(): void {
   this.courseService.getCourseById(this.courseId).then(course=>  this.course = course);
        this.course.creationDate = new Date(this.course.creationDate);
        this.courseCreationDate = new Date(this.course.creationDate);
  }
}
