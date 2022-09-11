import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScaleBlock]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class ScaleBlockDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'transition-duration', '0.2s')
  }

  onMouseEnter(): void {
    this.transform('scale(101%)');
  }
  onMouseLeave(): void {
    this.transform('none')
  }

  private transform(val: string): void {
    this.renderer.setStyle(this.element.nativeElement, 'transform', val)
  }

}
