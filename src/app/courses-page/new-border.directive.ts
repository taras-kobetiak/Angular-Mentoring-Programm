import { Directive, ElementRef, Input } from '@angular/core';
import { CoursePage } from '../interfaces/classes';

@Directive({
  selector: '[appNewBorder]'
})
export class NewBorderDirective {
  @Input() course: CoursePage

  milisecToDay: number = 1000 * 60 * 60 * 24
  constructor(private el: ElementRef) {

    this.el.nativeElement.style.border = '1px solid yellow'
    // if ((+this.course.creationDate - +new Date()) / this.milisecToDay > -14 &&
    //   +this.course.creationDate - +new Date() < 0) {
    //   this.el.nativeElement.style.border = '1px solid yellow'
    // }
  }



}
