import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TabelaRoutingModule} from './tabela-routing.module'
import { TabelaComponent } from './tabela.component';
import { FrequenciaService } from '../../services/frequencia.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    TabelaComponent
  ],
  imports: [
    CommonModule,
    TabelaRoutingModule,
    HttpClientModule
  ],
  providers: [FrequenciaService]
})
export class TabelaModule { }