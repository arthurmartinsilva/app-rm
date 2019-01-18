import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PersonagemComponent } from './personagem/personagem.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './router';
import { NavPersonagensComponent } from './nav-personagens/nav-personagens.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PrincipalComponent } from './principal/principal.component'

@NgModule({
  declarations: [
    AppComponent,
    PersonagemComponent,
    NavPersonagensComponent,
    NavBarComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
