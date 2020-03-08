import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LandingComponent } from "./landing/landing.component";
import { InformacionComponent } from './informacion/informacion.component';
import { FootherComponent } from './foother/foother.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LandingComponent,
    InformacionComponent,
    FootherComponent,
    ColaboradoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }