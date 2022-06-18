
//I dont know how to use this

import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNewBorder]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class NewBorderDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  onMouseEnter() {
    this.border('2px solid rgb(47, 255, 61)')
  }
  onMouseLeave() {
    this.border('none')
  }

  private border(val: string) {
    this.renderer.setStyle(this.element.nativeElement, "border", val);
  }
}

  // milisecToDay: number = 1000 * 60 * 60 * 24
  // constructor(private el: ElementRef) {

  //   this.el.nativeElement.style.border = '2px solid yellow'
  //   // if ((+this.course.creationDate - +new Date()) / this.milisecToDay > -14 &&
  //   //   +this.course.creationDate - +new Date() < 0) {
  //   //   this.el.nativeElement.style.border = '1px solid yellow'
  //   // }
  // }




