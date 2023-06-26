import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  options: AnimationOptions = {
    path: '../../../assets/img/about-us.json',
  };
  styles: Partial<CSSStyleDeclaration> = {};
}
