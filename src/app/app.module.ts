import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './general/header/header.component';
import { FooterComponent } from './general/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DarkmodeDirective } from './directive/darkmode.directive';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { SemComponent } from './pages/sem/sem.component';
import { SemDetailComponent } from './pages/sem/sem-detail/sem-detail.component';
import { SeoComponent } from './pages/seo/seo.component';
import { SeoDetailComponent } from './pages/seo/seo-detail/seo-detail.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ObserveElementDirective } from './directive/observe-element.directive';
import { ContactComponent } from './pages/contact/contact.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DarkmodeDirective,
    AboutUsComponent,
    SemComponent,
    SemDetailComponent,
    SeoComponent,
    SeoDetailComponent,
    PortfolioComponent,
    ObserveElementDirective,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
