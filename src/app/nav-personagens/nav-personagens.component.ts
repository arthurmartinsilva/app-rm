import { Component, OnInit } from '@angular/core';
import { PERSONAGENS } from '../database';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Personagem } from 'src/model/personagem';
import { Observable } from 'rxjs';
import { PersonagensService } from '../service/personagens.service';

@Component({
  selector: 'app-nav-personagens',
  templateUrl: './nav-personagens.component.html',
  styleUrls: ['./nav-personagens.component.css']
})
export class NavPersonagensComponent implements OnInit {

  personagens$ : Observable<Personagem[]>;

  constructor(private persService: PersonagensService) { 
    this.personagens$ = persService.getPersonagens();
  }
  
  ngOnInit() {    
  }  

}
