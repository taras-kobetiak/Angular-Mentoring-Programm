import { Component, OnInit } from '@angular/core';
import { CoursePage } from '../interfaces/classes';

@Component({
  selector: 'app-pages-block',
  templateUrl: './pages-block.component.html',
  styleUrls: ['./pages-block.component.scss']
})
export class PagesBlockComponent implements OnInit {

  constructor() { }

  courses: CoursePage[] = [];

  loadNewCourses() {
    console.log('here is come action');
  }

  deleteComponent(course: CoursePage): void {
    console.log(course.id);
  }

  editComponent(course: CoursePage): void {
    console.log(course.description);
  }

  ngOnInit(): void {
    this.courses = [
      new CoursePage(1, 'SomeTitle1', new Date(), 1, 'Some description Lorem ipsum dolor sit amet dolor sit amet consectetur consectetur dolor sit amet consectetur, adipisicing elit. Asperiores, est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, itaque.'),
      new CoursePage(2, 'SomeTitle2', new Date(), 1, 'Not good course.'),
      new CoursePage(3, 'SomeTitle3', new Date(), 1, 'Some description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, itaque.'),
    ]

    // оце це я не зміг зробити через геттер. і коли геттер був ця штука не працювала. мусив гетер удалити
    // і тоді мап пішов. може я не так якось гетери юзаю, але це все через автозаповнення робилось наче ж, + у книгу дивився
    this.courses.map(course => {
      if (course.description.length > 180) {
        course.description = course.description.slice(0, 179) + '…'
      }
    })
  }
}
