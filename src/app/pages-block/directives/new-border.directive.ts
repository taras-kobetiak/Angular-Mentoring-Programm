
import { Directive, ElementRef, Input, OnInit, } from '@angular/core';
import { CoursePage } from 'src/app/interfaces/classes';

@Directive({
  selector: '[appNewBorder]',
})

export class NewBorderDirective implements OnInit {

  @Input('appNewBorder') course: CoursePage;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    let milisecToDay: number = 1000 * 60 * 60 * 24;

    if ((+this.course.creationDate - +new Date()) / milisecToDay > -14 &&
      +this.course.creationDate - +new Date() < 0) {
      this.element.nativeElement.style.border = '2px solid rgb(47, 255, 61)'
    }
    else if ((+this.course.creationDate - +new Date()) > 0) {
      this.element.nativeElement.style.border = '2px solid rgb(45, 201, 218)'
    }
  }


}


  // 
  // constructor(private el: ElementRef) {

  //   this.el.nativeElement.style.border = '2px solid yellow'
  //   // if ((+this.course.creationDate - +new Date()) / this.milisecToDay > -14 &&
  //   //   +this.course.creationDate - +new Date() < 0) {
  //   //   this.el.nativeElement.style.border = '1px solid yellow'
  //   // }
  // }




