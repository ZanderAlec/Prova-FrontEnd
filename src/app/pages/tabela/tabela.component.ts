import { Component } from '@angular/core';
import { FrequenciaService } from '../../services/frequencia.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent{

  nome: String = "";
  public total: number = 0;
  data:any;

  constructor(private frenquencyList: FrequenciaService, private route : ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe(params => {this.nome = params['nome']});

    this.frenquencyList.getData(this.nome).subscribe(
      resultado => {
          if(resultado.length != 0){
            this.data = resultado[0].res;
            this.calculaTotal(this.data);
          } 
      }
    );
  }

  calculaTotal(dados: any){
    for(let valor of dados){
      this.total += valor.frequencia;
    }
  }

}
