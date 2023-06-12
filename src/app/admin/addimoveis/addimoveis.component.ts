import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addimoveis',
  templateUrl: './addimoveis.component.html',
  styleUrls: ['./addimoveis.component.scss']
})
export class AddimoveisComponent implements OnInit {

  imoveisForm!: FormGroup;

  constructor( private formBuilder: FormBuilder){

  }

  ngOnInit():void{

  }

  buscarCep(){
    console.log("buscarCep");
  }

}
