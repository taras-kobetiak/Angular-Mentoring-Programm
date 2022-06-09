import { Component, Input, OnInit } from '@angular/core';
import { CoursePage } from '../interfaces/classes';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {


  @Input() course!: CoursePage;
  constructor() { }

  ngOnInit(): void {
  }





}


