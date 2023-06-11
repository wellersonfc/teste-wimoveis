import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListimoveisComponent } from './listimoveis/listimoveis.component';
import { AddimoveisComponent } from './addimoveis/addimoveis.component';

const routes: Routes = [
  {path: '', component:ListimoveisComponent},
  {path: 'add', component:AddimoveisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
