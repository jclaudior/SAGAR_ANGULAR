import { ResponseAulas } from './../shared/aulaResponse';
import { DisciplinasResponse } from '../shared/disciplinaResponse';
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
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Curso } from 'src/app/curso/shared/curso.model';
import { TurmaService } from '../shared/turma.service';
import * as moment from 'moment';
import { ResponseTurmas } from '../shared/responseTurma.model';

declare var $: any;

@Component({
  selector: 'app-aula-consultar',
  templateUrl: './aula-consultar.component.html',
  styleUrls: ['./aula-consultar.component.css']
})

export class AulaConsultarComponent implements OnInit {

  @ViewChild('formAula', {static: true}) formAula: NgForm;


  requestSucess = false;
  mensagemModal = '';
  titleModal = '';
  cadastrando = false;
  consulta = false;

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
    disciplinas: [],
    stCurso: null
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



  ngOnInit(): void {

    if (localStorage['professor'] != null) {
      this.professor = JSON.parse(localStorage['professor']);
    }

    this.turmaService.getListarTurma().subscribe(
      response => {
        this.listTurma = response.retorno;
      }
    );

  }



  buscarAula(): void {
    this.service.getBuscarAula(this.aula.idAula).subscribe(
      response => {
        if (response.retorno.professor.cdMatricula == this.professor.cdMatricula) {
          this.aula = response.retorno;
          console.log(this.aula);
          this.aula.dtAula = moment(this.aula.dtAula).format("YYYY-MM-DD");
        } else {
          this.requestSucess = false;
          this.titleModal = "Aula Invalida";
          this.mensagemModal = "Aula invalida para Edição!";
          $('#mensagemModal').modal('show');
          this.cadastrando = false;
        }
      },
      error => {
        console.log(error);
        this.requestSucess = false;
        if (error.error.mensagem != null){
          this.titleModal = error.error.mensagem;
          this.mensagemModal = error.error.mensagem;
        }else{
          this.titleModal = error.name;
          this.mensagemModal = error.message;
        }
        $('#mensagemModal').modal('show');
      }
    );
  }

  limparAula(): void {

    this.turma = {
      cdTurma: null,
      nmTurma: null,
      curso: this.curso,
      dsPeriodo: null,
      stTurma: true
    };

    this.disciplina = {
      idDisciplina: null,
      nmDisciplina: null,
      qtHora: null,
      stDisciplina: null,
    };

    this.aula = {
      idAula: null,
      professor: null,
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


    //this.consulta = false;
  }

}
