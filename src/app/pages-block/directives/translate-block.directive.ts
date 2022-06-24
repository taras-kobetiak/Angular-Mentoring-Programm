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
    this.renderer.setStyle(this.element.nativeElement, 'transition-duration', '0.2s')
  }

  onMouseEnter(): void {
    this.transform('translate(0, 2px)');
  }
  onMouseLeave(): void {
    this.transform('translate(0)')
  }

  private transform(val: string): void {
    this.renderer.setStyle(this.element.nativeElement, 'transform', val)
  }

}
