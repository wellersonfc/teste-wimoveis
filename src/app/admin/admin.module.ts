import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddimoveisComponent } from './addimoveis/addimoveis.component';
import { ListimoveisComponent } from './listimoveis/listimoveis.component';


@NgModule({
  declarations: [
    AddimoveisComponent,
    ListimoveisComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
