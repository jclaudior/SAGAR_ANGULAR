import { Component, OnInit } from '@angular/core';
import { Professor } from './shared/professor.model';
import { ProfessorService } from './shared/professor.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  matricula: number;

  professor: Professor = {
    cdMatricula: null,
    nmProfessor: null,
    dsEmail: null,
    dsCelular: null,
    pwAcesso: null,
  }

  professorCreate: Professor = {
    cdMatricula: null,
    nmProfessor: null,
    dsEmail: null,
    dsCelular: null,
    pwAcesso: null,
  }

  constructor(
    private professorService: ProfessorService
  ) { }

  ngOnInit(): void {
    
  }

  buscar(): void {
    this.professorService.getBuscarProfessor(this.matricula).subscribe(
      response => this.professor = response
    );
  }

  inserir(): void {
    this.professorService.postInserirProfessor(this.professorCreate).subscribe(
      response => { this.professorCreate.nmProfessor = ""
    }
    );
  }

}
