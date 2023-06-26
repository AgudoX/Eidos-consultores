import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[darkMode]',
})
export class DarkmodeDirective implements OnChanges {
  @Input() darkMode!: boolean;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.darkMode) {
      this.renderer.addClass(this.el.nativeElement, 'dark');
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'dark');
      this.renderer.addClass(this.el.nativeElement, 'light');
      this.renderer.removeClass(document.body, 'dark');
      this.renderer.addClass(document.body, 'light');
    }
  }
}
