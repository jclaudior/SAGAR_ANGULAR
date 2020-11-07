import { ResponseDisciplina } from './../shared/responseDisciplina.model';
import { DisciplinaService } from './../shared/disciplina.service';
import { Disciplina } from './../shared/disciplina.model';
import { FormsModule }   from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina-consultar',
  templateUrl: './disciplina-consultar.component.html',
  styleUrls: ['./disciplina-consultar.component.css']
})
export class DisciplinaConsultarComponent implements OnInit {

  disciplina: Disciplina = {
    cdDisciplina: null,
    nmDisciplina: null,
    cargaHoraria: null,
    status: null,
  };

  responseDisciplina: ResponseDisciplina;

  constructor(private service: DisciplinaService) { }

  ngOnInit(): void {
  }

  cadastrarDisciplina(): void{
    
  }
}
