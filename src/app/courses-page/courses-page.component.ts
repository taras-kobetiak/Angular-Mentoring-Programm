import { Component, OnInit } from '@angular/core';
import { CoursePage } from '../interfaces/classes';


@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {


  course: CoursePage = {
    id: 111,
    title: 'SomeTitle',
    creationDate: new Date(),
    durationInMinutes: 1,
    description: 'Some description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, itaque.'
  }


  constructor() { }

  ngOnInit(): void {
  }





}


