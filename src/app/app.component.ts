import { Component } from '@angular/core';
import { Personagem } from 'src/model/personagem';
import { PERSONAGENS } from './database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-rm';

  personagens = PERSONAGENS;
}
