import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  @Output() passaValor = new EventEmitter(); 

  nome:String  = "";

  constructor(private router: Router){
  }

  enviaValor(){

    if(this.nome != "" ){

      this.router.navigate(
        ['tabela'],
        {queryParams: { nome: this.nome }}
      );

    }
  }

  limpaInput(){
    this.nome = "";
  }
}
