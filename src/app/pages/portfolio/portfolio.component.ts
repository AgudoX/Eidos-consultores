import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { Portfolio } from 'src/app/interfaces/portfolio.interface';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  portfolioArray!: Portfolio[];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioArray = this.portfolioService.portfolioArray;
  }
}
