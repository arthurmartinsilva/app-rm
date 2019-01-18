import { Component, OnInit, Input } from '@angular/core';
import { Personagem } from 'src/model/personagem';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
  }

  @Input()
  personagem: Personagem;

  quantidadeEstrelas(){
    var arrayStar: Array<string> = []; 
    var quantidadeEstrelas: number = this.personagem.star;
    for(quantidadeEstrelas;quantidadeEstrelas>0;quantidadeEstrelas--){
      arrayStar.push("stars");
    }
    return arrayStar;
  }

}
