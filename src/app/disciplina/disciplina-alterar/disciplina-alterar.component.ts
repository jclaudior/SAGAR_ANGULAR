import { ResponseDisciplina } from './../shared/responseDisciplina.model';
import { DisciplinaService } from './../shared/disciplina.service';
import { Disciplina } from './../shared/disciplina.model';
import { FormsModule }   from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina-alterar',
  templateUrl: './disciplina-alterar.component.html',
  styleUrls: ['./disciplina-alterar.component.css']
})
export class DisciplinaAlterarComponent implements OnInit {

  disciplina: Disciplina = {
    cdDisciplina: null,
    nmDisciplina: null,
    cargaHoraria: null,
    status: null
  };

  responseDisciplina: ResponseDisciplina;

  constructor(private service: DisciplinaService) { }

  ngOnInit(): void {
  }

  cadastrarDisciplina(): void{
    
  }
}
