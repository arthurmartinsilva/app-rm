import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PersonagemComponent } from './personagem/personagem.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './router'

@NgModule({
  declarations: [
    AppComponent,
    PersonagemComponent
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
