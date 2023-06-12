import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imoveis } from '../model/imoveis';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor( private http:HttpClient) { }

  private readonly API = 'viacep.com.br/ws/'

  getServiceCep(cep: string) {
    this.http.get(`${this.API}/${cep}/json`)
  }

}
