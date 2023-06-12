import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddimoveisComponent } from './addimoveis/addimoveis.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ListimoveisComponent } from './listimoveis/listimoveis.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddimoveisComponent,
    ListimoveisComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
