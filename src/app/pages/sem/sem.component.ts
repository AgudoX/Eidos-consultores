import { Component } from '@angular/core';
import { Sem } from 'src/app/interfaces/sem.interface';
import { SemService } from 'src/app/service/sem.service';

@Component({
  selector: 'app-sem',
  templateUrl: './sem.component.html',
  styleUrls: ['./sem.component.scss'],
})
export class SemComponent {
  semArray: Sem[];
  constructor(private semService: SemService) {
    this.semArray = this.semService.semArray;
  }
}
