//Para definir rotas precisa importar o Routes, definir essa classe const com o path e o componente pra ela. Adicionar no app.module a importação e utilização do forRoot
import { Routes } from '@angular/router';
import { PersonagemComponent } from './personagem/personagem.component';

export const ROUTES: Routes = [
    {'path': 'personagens', component: PersonagemComponent}
]