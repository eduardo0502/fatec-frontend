import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { CabezeraComponent } from './cabezera/cabezera.component';
import { PrincipalComponent } from './principal/principal.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { MenuComponent } from './menu/menu.component';
import { RegistroComponent } from './registro/registro.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    LoginComponent,
    PagesComponent,
    HomeComponent,
    HeaderComponent,
    CabezeraComponent,
    PrincipalComponent,
    CarruselComponent,
    MenuComponent,
    RegistroComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
