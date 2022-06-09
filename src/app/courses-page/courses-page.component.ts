import { Component, OnInit } from '@angular/core';
import { CoursePage } from '../interfaces/classes';


@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {


  courses: CoursePage[] = [
    new CoursePage(111, 'SomeTitle', new Date(), 1, 'Some description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, itaque.')

  ]





  constructor() { }

  ngOnInit(): void {
  }





}


