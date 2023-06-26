import { Component, OnInit } from '@angular/core';
import { Seo } from 'src/app/interfaces/seo.interface';
import { SeoService } from 'src/app/service/seo.service';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.scss'],
})
export class SeoComponent implements OnInit {
  seoArray!: Seo[];
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoArray = this.seoService.seoArray;
  }
}
