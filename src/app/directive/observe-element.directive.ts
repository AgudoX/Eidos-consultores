import { Directive } from '@angular/core';

@Directive({
  selector: '[appObserveElement]',
  exportAs: 'intersection',
})
export class ObserveElementDirective {
  constructor() {}
}
