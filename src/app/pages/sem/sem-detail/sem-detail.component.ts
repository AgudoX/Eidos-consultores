import { Component, Input, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { Sem } from 'src/app/interfaces/sem.interface';

@Component({
  selector: 'app-sem-detail',
  templateUrl: './sem-detail.component.html',
  styleUrls: ['./sem-detail.component.scss'],
})
export class SemDetailComponent implements OnInit {
  @Input() semArticle!: Sem;
  options!: AnimationOptions;

  ngOnInit(): void {
    this.options = {
      path: this.semArticle.lottieUrl,
    };
  }
}
