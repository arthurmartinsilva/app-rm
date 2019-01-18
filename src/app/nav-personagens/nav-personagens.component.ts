import { Component, OnInit } from '@angular/core';
import { PERSONAGENS } from '../database';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Personagem } from 'src/model/personagem';

@Component({
  selector: 'app-nav-personagens',
  templateUrl: './nav-personagens.component.html',
  styleUrls: ['./nav-personagens.component.css']
})
export class NavPersonagensComponent implements OnInit {

  constructor(private http: HttpClient) { }

  personagens;

  ngOnInit() {
    //parametros para a chamada
    //const params = new HttpParams().set("id","1");
    //this.http.get('http://localhost:3000/personagens', {params}).subscribe(resp => this.personagens = resp)


    this.http.get('http://localhost:3000/personagens').subscribe(resp => this.personagens = resp);
  }  

}
