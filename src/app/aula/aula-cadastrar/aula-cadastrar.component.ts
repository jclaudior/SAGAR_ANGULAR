import { DisciplinasResponse } from './../shared/disciplinaResponse';
import { DisciplinaService } from '../shared/disciplina.service';
import { CursoService } from '../shared/curso.service';
import { Professor } from '../shared/professor.model';
import { Turma } from '../shared/turma.model';
import { Disciplina } from '../shared/disciplina.model';
import { Aula } from '../shared/aula.model';
import { CursosResponse } from '../shared/cursoResponse';
import { ResponseAula } from '../shared/aulaResponse';
import { AulaService } from '../shared/aula.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Curso } from 'src/app/curso/shared/curso.model';
import { TurmaService } from '../shared/turma.service';
import { ResponseTurmas } from '../shared/responseTurma.model';

declare var $: any;

@Component({
  selector: 'app-aula-cadastrar',
  templateUrl: './aula-cadastrar.component.html',
  styleUrls: ['./aula-cadastrar.component.css']
})
export class AulaCadastrarComponent implements OnInit {

  @ViewChild('formAula', {static: true}) formAula: NgForm;

  requestSucess = false;
  mensagemModal = '';
  titleModal = '';
  cadastrando = false;

  btnCadastrar = false;

  responseAula: ResponseAula;
  responseDisciplinas: DisciplinasResponse;
  responseCursos: CursosResponse;

  professor: Professor = {
    cdMatricula: null,
    nmProfessor: null,
    dsEmail: null,
    dsCelular: null,
    pwAcesso: null,
    stProfessor: null,
  };

  curso: Curso = {
    cdCurso: null,
    nmCurso: null,
    qtHora: null,
    cordenadorEntity: null,
    disciplinas: []
  };

  turma: Turma = {
    cdTurma: null,
    nmTurma: null,
    curso: this.curso,
    dsPeriodo: null,
    stTurma: true
  };

  disciplina: Disciplina = {
    idDisciplina: null,
    nmDisciplina: null,
    qtHora: null,
    stDisciplina: null,
  };

  aula: Aula = {
    idAula: null,
    professor: this.professor,
    turma: this.turma,
    disciplina: this.disciplina,
    lkAula: null,
    lkGravacao: null,
    qtAluno: null,
    dtAula: null,
    hrInicio: null,
    hrTermino: null,
    dsAula: null,
  };

  

  listTurma: Array<Turma>;
  listDisciplina: Array<Disciplina>;

  turmaResponse: ResponseTurmas;

  constructor(private service: AulaService,
              private turmaService: TurmaService,
              private disciplinaService: DisciplinaService) {

  }

  populaDiciplina(): void{
    this.listDisciplina = this.turma.curso.disciplinas;
  }

  ngOnInit(): void {

    if (localStorage['professor'] != null){
      this.professor = JSON.parse(localStorage['professor']);
    }

    this.turmaService.getListarTurma().subscribe(
      response => {
        this.listTurma = response.retorno;
      }
    );

  }

  cadastrarAula(): void{
    console.log(this.aula);
    this.cadastrando = true;
    this.aula.professor = this.professor;
    this.service.postInserirAula(this.aula).subscribe(
      response => {
        console.log(response);
        this.requestSucess = true;
        this.responseAula = response;
        console.log(this.responseAula);
        this.titleModal = this.responseAula.mensagem;
        if (this.responseAula.retorno != null){
          this.mensagemModal = `Protocolo: ${this.responseAula.retorno.idAula}`;
          this.aula = {
            idAula: null,
            professor: this.professor,
            turma: this.turma,
            disciplina: this.disciplina,
            lkAula: null,
            lkGravacao: null,
            qtAluno: null,
            dtAula: null,
            hrInicio: null,
            hrTermino: null,
            dsAula: null,
          };
        }else{
          this.mensagemModal = this.responseAula.mensagem;
        }
        $('#mensagemModal').modal('show');
        this.cadastrando = false;
      },
      error => {
        console.log(error);
        this.requestSucess = false;
        if (error.error.mensagem != null){
          this.titleModal = error.error.mensagem;
          if (error.error.retorno != null){
            this.mensagemModal = `Já existe: ${error.error.retorno.idAula} `;
          }else{
            this.mensagemModal = error.error.mensagem;
          }
        }else{
          this.titleModal = error.name;
          this.mensagemModal = error.message;
        }
        $('#mensagemModal').modal('show');
        this.cadastrando = false;
      }
    );
  }

  setNewTurma(turma: Turma): void {
    console.log(turma);
    this.turma = turma ;
    console.log(this.turma);
  }

  setNewDisciplina(disciplina: Disciplina): void{
    console.log(disciplina);
    this.disciplina = disciplina;
    console.log(this.disciplina);
  }

}
