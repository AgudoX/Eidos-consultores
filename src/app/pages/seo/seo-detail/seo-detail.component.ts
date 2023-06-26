import { Component, Input, OnInit } from '@angular/core';
import { Seo } from 'src/app/interfaces/seo.interface';

@Component({
  selector: 'app-seo-detail',
  templateUrl: './seo-detail.component.html',
  styleUrls: ['./seo-detail.component.scss'],
})
export class SeoDetailComponent {
  @Input() seoArticle!: Seo;
}
