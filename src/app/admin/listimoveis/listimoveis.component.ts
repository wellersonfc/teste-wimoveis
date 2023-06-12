import { Component, OnInit } from '@angular/core';
import { Imoveis } from '../model/imoveis';
import { ImoveisService } from '../services/imoveis.service';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-listimoveis',
  templateUrl: './listimoveis.component.html',
  styleUrls: ['./listimoveis.component.scss']
})



export class ListimoveisComponent  implements OnInit {

  listaimoveis: Observable<Imoveis[]>;

  displayedColumns = ['name','tipo', 'valor', 'endereco', 'actions'];

  constructor( private imoveisService: ImoveisService) {
    this.listaimoveis = this.imoveisService.ListImoveisService()
      .pipe(
        catchError( error => {
          console.log('Error:', error)
          return of([])
        })
      );
  }

  ngOnInit():void{

  }

  removerImovel():void{

  }

  deletarImovel():void {

  }

}
