import { Component, OnInit } from '@angular/core';
import { PERSONAGENS } from '../database';

@Component({
  selector: 'app-nav-personagens',
  templateUrl: './nav-personagens.component.html',
  styleUrls: ['./nav-personagens.component.css']
})
export class NavPersonagensComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  personagens = PERSONAGENS;

}
