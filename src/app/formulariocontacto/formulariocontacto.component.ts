import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulariocontacto',
  templateUrl: './formulariocontacto.component.html',
  styleUrls: ['./formulariocontacto.component.css']
})
export class FormulariocontactoComponent implements OnInit {

  @Input() datos: any;

  constructor() { }

  ngOnInit(): void {
  }

}
