import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imoveis } from '../model/imoveis';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImoveisService {

  constructor( private http:HttpClient) { }

  private readonly API = 'http://localhost:5875/imovel'

  listImoveisService(): Observable<Imoveis[]>{
    return this.http.get<Imoveis[]>(this.API);
  }

  addImovelService(data:Imoveis) {
     return this.http.post<Imoveis>(this.API,data)
  }

  removeImovelService(id:string) {
    return this.http.delete<Imoveis>(`${this.API}/${id}`)
  }

 updateImovelService(id:string) {
  return this.http.delete<Imoveis>(`${this.API}/${id}`)
}

}
