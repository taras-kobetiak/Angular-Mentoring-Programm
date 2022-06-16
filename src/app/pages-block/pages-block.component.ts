import { Component, OnInit } from '@angular/core';
import { CoursePage } from '../interfaces/classes';

@Component({
  selector: 'app-pages-block',
  templateUrl: './pages-block.component.html',
  styleUrls: ['./pages-block.component.scss']
})
export class PagesBlockComponent implements OnInit {
  courses: CoursePage[];

  loadNewCourses() {
    console.log('here is come action');
  }

  deleteComponent(id: number): void {
    // this.courses.splice(this.courses.findIndex(el => el.id === id), 1)

    this.courses = this.courses.filter(el => el.id !== id)
  }

  editComponent(course: CoursePage): void {
    console.log(course.description);
  }

  ngOnInit(): void {
    this.courses = [
      new CoursePage(1, 'SomeTitle1', new Date(), 1, 'Some description Lorem ipsum dolor sit amet dolor sit amet consectetur consectetur dolor sit amet consectetur, adipisicing elit. Asperiores, est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, itaque.'),
      new CoursePage(2, 'SomeTitle2', new Date(), 10, 'Not good course.'),
      new CoursePage(3, 'SomeTitle3', new Date(), 12, 'Some description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, itaque.'),
    ]
  }
}
