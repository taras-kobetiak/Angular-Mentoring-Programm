
import { Directive, ElementRef, Input, OnInit, } from '@angular/core';
import { ICoursePage } from 'src/app/interfaces/course.interface';

@Directive({
  selector: '[appNewBorder]',
})

export class NewBorderDirective implements OnInit {

  @Input('appNewBorder') course: ICoursePage;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {

    let timeFromCreationDate = Number(new Date(this.course.creationDate)) - Number(new Date());
    let milisecToDay: number = 1000 * 60 * 60 * 24;

    if (timeFromCreationDate / milisecToDay > -14 &&
      timeFromCreationDate < 0) {
      this.element.nativeElement.style.border = '2px solid rgb(47, 255, 61)'
    }
    else if (timeFromCreationDate > 0) {
      this.element.nativeElement.style.border = '2px solid rgb(45, 201, 218)'
    }
  }
}





