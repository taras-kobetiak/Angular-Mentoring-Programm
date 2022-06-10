import { Component } from '@angular/core';
import { CoursePage } from './interfaces/classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Mentoring-Programm';

  courses: CoursePage[] = [
    new CoursePage(1, 'SomeTitle1', new Date(), 1, 'Some description Lorem ipsum dolor sit amet dolor sit amet consectetur consectetur dolor sit amet consectetur, adipisicing elit. Asperiores, est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, itaque.'),
    new CoursePage(2, 'SomeTitle2', new Date(), 1, 'Not good course.'),
    new CoursePage(3, 'SomeTitle3', new Date(), 1, 'Some description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, itaque.'),


  ]


  loadNewCourses() {
    console.log('here is come action');

  }

  deleteComponent(course: CoursePage): void {
    console.log(course.id);
  }

  editComponent(course: CoursePage): void {
    console.log(course.description);

  }







  ngOnInit(): string {


    if (this.courses[0].description.length > 9) {
      return this.courses[0].description.slice(0, 1) + '...'
    }
    return this.courses[0].description

  }

}
