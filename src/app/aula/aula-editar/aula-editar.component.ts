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
import { Component, OnInit, ViewChild } from '@angular/core';
import { Curso } from 'src/app/curso/shared/curso.model';
import { TurmaService } from '../shared/turma.service';
import { ResponseTurmas } from '../shared/responseTurma.model';
import * as moment from 'moment';

declare var $: any;

@Component({
  selector: 'app-aula-editar',
  templateUrl: './aula-editar.component.html',
  styleUrls: ['./aula-editar.component.css']
})
export class AulaEditarComponent implements OnInit {

  @ViewChild('formAula', { static: true }) formAula: NgForm;

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

  populaDiciplina(): void {
    this.listDisciplina = this.turma.curso.disciplinas;
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

  alterarAula(): void {
    console.log(this.aula);
    this.cadastrando = true;
    this.aula.professor = this.professor;
    this.service.postEditarAula(this.aula).subscribe(
      response => {
        console.log(response);
        this.requestSucess = true;
        this.responseAula = response;
        console.log(this.responseAula);
        this.titleModal = this.responseAula.mensagem;
        if (this.responseAula.retorno != null) {
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
        } else {
          this.mensagemModal = this.responseAula.mensagem;
        }
        $('#mensagemModal').modal('show');
        this.cadastrando = false;
      },
      error => {
        console.log(error);
        this.requestSucess = false;
        if (error.error.mensagem != null) {
          this.titleModal = error.error.mensagem;
          if (error.error.retorno != null) {
            this.mensagemModal = `Já existe: ${error.error.retorno.idAula} `;
          } else {
            this.mensagemModal = error.error.mensagem;
          }
        } else {
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
    this.turma = turma;
    console.log(this.turma);
  }

  setNewDisciplina(disciplina: Disciplina): void {
    console.log(disciplina);
    this.disciplina = disciplina;
    console.log(this.disciplina);
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
    this.consulta = false;
    this.aula = {
      idAula: null,
      professor: null,
      turma: null,
      disciplina: null,
      lkAula: null,
      lkGravacao: null,
      qtAluno: null,
      dtAula: null,
      hrInicio: null,
      hrTermino: null,
      dsAula: null,
    };
  }


}
