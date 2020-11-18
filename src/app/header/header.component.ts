import { Professor } from './../professor/shared/professor.model';
import { Cordenador } from './../curso/shared/cordenador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  cordenado: Cordenador;
  professor: Professor;

  nome = '';

  ngOnInit(): void {
    if (localStorage['cordenador'] != null){
      this.cordenado = JSON.parse(localStorage['cordenador']);
      this.nome = this.cordenado.nmCordenador;
    }
    if (localStorage['professor'] != null){
      this.professor = JSON.parse(localStorage['professor']);
      this.nome = this.professor.nmProfessor;
    }
  }


}
