import { Directive, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the ClickDisappearDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[click-disappear]', // Attribute selector
  host: {
    '(click)': 'vanish()'
  }
})
export class ClickDisappearDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer
  ) {
    console.log('Hello ClickDisappearDirective Directive');
  }

  ngOnInit() {
    this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'opacity 2s linear');
  }

  vanish() {

    this.renderer.setElementStyle(this.element.nativeElement, 'opacity', '0');

  }

}
