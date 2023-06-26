import { Injectable } from '@angular/core';
import { Portfolio } from '../interfaces/portfolio.interface';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  portfolioArray: Portfolio[];
  constructor() {
    this.portfolioArray = [
      {
        url: '../../assets/img/clients/almazen.jpg',
        link: 'https://almazen.es/',
      },
      { url: '../../assets/img/clients/biocorporal.jpg', link: '#' },
      { url: '../../assets/img/clients/centrodepilacionmedico.jpg', link: '#' },
      {
        url: '../../assets/img/clients/quironsalud-logo-original.png',
        link: '#',
      },
      {
        url: '../../assets/img/clients/herbolariosaludnatural.jpg',
        link: 'https://www.herbolariosaludnatural.com/',
      },

      {
        url: '../../assets/img/clients/intertaping.jpg',
        link: 'https://es.intertaping.com/',
      },
      {
        url: '../../assets/img/clients/lejiasmajado.jpg',
        link: 'http://www.lejiasmajado.com/',
      },
      {
        url: '../../assets/img/clients/lidersport.jpg',
        link: 'http://www.lidersport.es/',
      },
      { url: '../../assets/img/clients/maquinas-jimenez.jpg', link: '#' },
      {
        url: '../../assets/img/clients/mudanzascontreras.jpg',
        link: 'https://www.mudanzascontreras.com/',
      },
      {
        url: '../../assets/img/clients/pretensadosduransolarbloc.jpg',
        link: 'https://solarbloc.es/',
      },
      {
        url: '../../assets/img/clients/renta92.jpg',
        link: 'https://renta92.com/',
      },
      {
        url: '../../assets/img/clients/rotulosmatesanz.jpg',
        link: 'https://www.rotulosmatesanz.es/',
      },
      {
        url: '../../assets/img/clients/sani.jpg',
        link: 'http://gourmetsani.com/es/inicio/',
      },
      { url: '../../assets/img/clients/santamarinasalud.jpg', link: '#' },
      {
        url: '../../assets/img/clients/zaunk.jpg',
        link: 'https://www.zaunk.com/',
      },
    ];
  }
}
