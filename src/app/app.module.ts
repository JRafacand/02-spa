import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Rutas
import { APP_ROUTING } from './app.routes';
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
//Servicios
import { HeroesService } from './service/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SrcheroeComponent } from './components/srcheroe/srcheroe.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SrcheroeComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
