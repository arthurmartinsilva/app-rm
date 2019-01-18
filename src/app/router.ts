//Para definir rotas precisa importar o Routes, definir essa classe const com o path e o componente pra ela. Adicionar no app.module a importação e utilização do forRoot
import { Routes } from '@angular/router';
import { PersonagemComponent } from './personagem/personagem.component';
import { NavPersonagensComponent } from './nav-personagens/nav-personagens.component';
import { PrincipalComponent } from './principal/principal.component';

export const ROUTES: Routes = [
    {'path': 'personagens', component: NavPersonagensComponent},
    {'path': 'home', component: PrincipalComponent}
]