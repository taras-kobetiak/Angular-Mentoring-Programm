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


  courses: ICoursePage[];
  course: ICoursePage;
  temporaryId: number = 1;
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

  async ngOnInit(): Promise<void> {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.courseId) {
      await this.courseService.getCourseById(this.courseId)
        .then((response) => {
          return response.json();
        }).then(courseData => {
          this.course = courseData;
          this.course.creationDate = new Date(this.course.creationDate)
        });
    } else {
      this.course = this.defaultCourseData
    }
  }

  onSubmit(): void {
    this.course.id ? this.updateCourse() :
      this.newCourse()

    this.router.navigate(['courses'])
  }

  onCancelButtonClick(): void {
    this.router.navigate(['/courses'])
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
    this.course.creationDate = new Date(this.course.creationDate);
    this.courseService.updateCourse(this.course);
  }

  async newCourse(): Promise<void> {

    await this.courseService.getCoursesList()
      .then((response) => {
        return response.json();
      }).then(coursesData => {
        this.courses = coursesData;
      })


    // .then(() => this.generatetemporaryId())

    // while (this.courses.filter(course => course.id = this.temporaryId + '')) {
    //   ++this.temporaryId;
    //   console.log(this.temporaryId);

    // }



    // this.course.id = this.temporaryId + 12 + ''
    this.course.creationDate = new Date(this.course.creationDate);
    this.courseService.addCourses(this.course);
  }




  generatetemporaryId(): void {
    console.log(this.temporaryId);

    if (this.courses.filter(course => course.id = this.temporaryId + '')) {
      return;
    } else {

      ++this.temporaryId;
      console.log(this.temporaryId);
      this.generatetemporaryId()
    }
  }

}