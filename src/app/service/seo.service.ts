import { Injectable } from '@angular/core';
import { Seo } from '../interfaces/seo.interface';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  seoArray: Seo[];
  constructor() {
    this.seoArray = [
      {
        url: '../../assets/img/seo/informe-seo.png',
        description:
          'Mejoramos la estructura y el contenido de tu sitio web para aumentar su visibilidad en los motores de búsqueda. Con técnicas avanzadas de SEO, como investigación de palabras clave y <strong>optimización on-page</strong>, aseguramos que tu sitio sea amigable para los buscadores y <strong>atraiga tráfico relevante.</strong>🚀🔍 ',
      },
      {
        url: '../../assets/img/seo/enlace-roto.png',
        description:
          'Impulsamos tu posicionamiento en los resultados de búsqueda de manera orgánica. A través de estrategias de <strong>construcción de enlaces</strong> y generación de <strong>contenido de calidad</strong>, aumentamos tu autoridad en línea y generamos un flujo constante de visitantes interesados. ¡Obtén tráfico <strong>sostenible y duradero!</strong> 🌱📈',
      },
      {
        url: '../../assets/img/seo/tendencias.png',
        description:
          'Utilizamos herramientas y análisis avanzados para monitorear el desempeño de tu sitio web.<strong> Identificamos oportunidades</strong> de mejora, seguimos las tendencias de búsqueda y adaptamos nuestra estrategia para asegurar que estés siempre un paso adelante de la competencia. ¡Optimiza tu presencia en línea y <strong>destaca entre la multitud!</strong> 📊💡',
      },
    ];
  }
}
