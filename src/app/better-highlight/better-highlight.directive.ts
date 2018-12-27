import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }

}
