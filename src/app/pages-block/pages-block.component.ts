import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CoursePage } from '../interfaces/classes';
import { FoundCoursesPipe } from './found-courses.pipe';
import { OrderByPipe } from './order-by.pipe';


@Component({
  selector: 'app-pages-block',
  templateUrl: './pages-block.component.html',
  styleUrls: ['./pages-block.component.scss']
})
export class PagesBlockComponent implements OnInit, OnChanges {

  courses: CoursePage[] = [];


  loadNewCourses() {
    console.log('here is come action');
  }

  deleteComponent(id: number): void {
    this.courses = this.courses.filter(el => el.id !== id)
  }

  editComponent(course: CoursePage): void {
    console.log(course.description);
  }

  changeRate(course: CoursePage): void {
    course.topRated = !course.topRated;
  }

  findClick(inputData: string) {
    FoundCoursesPipe.prototype.transform(this.courses, inputData)

    // this.courses.sort((a, b) => b.title.toLowerCase().includes(inputData.toLowerCase())
    //   && !a.title.toLowerCase().includes(inputData.toLowerCase()) ? 1 : -1)
    // console.log(inputData);

  }

  ngOnInit(): void {
    this.courses = [
      new CoursePage(1, 'First', new Date(2022, 5, 13), 121, 'Some description Lorem ipsum dolor sit amet dolor sit amet consectetur consectetur dolor sit amet consectetur, adipisicing elit. Asperiores, est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, itaque.'),
      new CoursePage(2, 'Second', new Date(2022, 5, 21), 59, 'Not good course.'),
      new CoursePage(3, 'Third', new Date(2021, 5, 3), 96, 'Some description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, itaque.'),
      new CoursePage(2123, 'Second', new Date(2022, 5, 21), 59, 'Not good course.'),
      new CoursePage(22, 'Second', new Date(2022, 5, 21), 59, 'Not good course.'),
      new CoursePage(12, 'Second mama', new Date(2022, 5, 21), 59, 'Not good course.'),
      new CoursePage(342, 'Second', new Date(2022, 5, 21), 59, 'Not good course.'),
      new CoursePage(221, 'Second', new Date(2022, 5, 21), 59, 'Not good course.'),

    ]
    // this.courses.sort((a, b) => +b.creationDate - +a.creationDate)

    OrderByPipe.prototype.transform(this.courses)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }
}
