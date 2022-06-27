
import { Directive, ElementRef, Input, OnInit, } from '@angular/core';
import { ICoursePage } from 'src/app/interfaces/course.interface';

@Directive({
  selector: '[appNewBorder]',
})

export class NewBorderDirective implements OnInit {

  @Input('appNewBorder') course: ICoursePage;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
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





