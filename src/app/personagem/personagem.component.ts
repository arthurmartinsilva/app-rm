import { Component, OnInit, Input } from '@angular/core';
import { Personagem } from 'src/model/personagem';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonagensService } from '../service/personagens.service';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal, private persService: PersonagensService) {
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

  changeStar(up: Boolean){
    if(this.validaStar(up)){
      var num_star: number = this.personagem.star;
      if(up){
        num_star++;
      }
      else{
        num_star--;
      }
      this.personagem.star = num_star;
      this.persService.changeStar(this.personagem, num_star).subscribe(
      );
    }
    
  }

  validaStar(up: Boolean){
    if(up && this.personagem.star >= 5){
      return false;
    }
    else if (!up && this.personagem.star <= 1){
      return false;
    }
    return true;
  }


}
