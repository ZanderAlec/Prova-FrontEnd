import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FrequenciaService {

  readonly apiUrl: String;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/';
  }

  getData(nome: String){
    return this.http.get<any>(`${this.apiUrl}${nome}`);
  }

}

