import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personagem } from 'src/model/personagem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  constructor(private http: HttpClient) { 
    
  }

  getPersonagens(): Observable<Personagem[]>{
    return this.http.get<Personagem[]>('http://localhost:3000/personagens');
  }

}
