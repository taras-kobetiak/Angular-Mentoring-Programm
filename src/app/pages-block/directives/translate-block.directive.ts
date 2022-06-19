import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTranslateBlock]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class TranslateBlockDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    // отут я хз як правильно зробити. я хотів додати це чисто до цього опускання, а щоб бордери зразу появлялись
    this.renderer.setStyle(this.element.nativeElement, 'transition-duration', '0.2s')
  }

  onMouseEnter() {
    this.transform('translate(0, 2px)');
  }
  onMouseLeave() {
    this.transform('translate(0)')
  }

  private transform(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'transform', val)
  }

}
