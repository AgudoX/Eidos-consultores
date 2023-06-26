import { Injectable } from '@angular/core';
import { Sem } from '../interfaces/sem.interface';

@Injectable({
  providedIn: 'root',
})
export class SemService {
  semArray: Sem[];
  constructor() {
    this.semArray = [
      {
        title: 'Impulsa tu negocio',
        lottieUrl: './assets/img/sem/rocket-loader.json',
        description:
          'Con nuestra estrategia de SEM, llevamos tu negocio al siguiente nivel en el mundo digital. A través de la investigación de <strong>palabras clave</strong>, anuncios optimizados y seguimiento de conversiones, generamos un <strong>aumento significativo en el tráfico</strong> y las conversiones de tu sitio web. ¡Prepárate para un crecimiento exponencial!',
      },
      {
        title: 'Posicionamiento instantáneo',
        lottieUrl: './assets/img/sem/eyes-without-nerves.json',
        description:
          'Colocamos tu negocio en la cima de los resultados de búsqueda en un abrir y cerrar de ojos. Al aparecer en <strong> las primeras posiciones </strong>, te aseguramos una visibilidad instantánea ante <strong>tu audiencia objetivo.</strong> Aumenta tu reconocimiento de marca y <strong>supera a la competencia </strong> en el mundo digital.',
      },
      {
        title: 'Maximiza tu ROI',
        lottieUrl: './assets/img/sem/profit-growth.json',
        description:
          'Nuestro enfoque basado en datos y análisis nos permite maximizar tu retorno de inversión <strong>(ROI)</strong>. Utilizamos técnicas avanzadas de <strong>segmentación de audiencia</strong> y ajuste de ofertas para asegurar que cada dólar invertido en publicidad sea altamente efectivo. Obtén <strong>resultados medibles</strong> y una mayor rentabilidad para tu negocio.',
      },
    ];
  }
}
