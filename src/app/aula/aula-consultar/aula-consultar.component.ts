import { TurmaService } from './../../turma/shared/turma.service';
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
  qtTotalHora = 0;

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

  listCurso: Array<Curso>;
  listTurma: Array<Turma>;
  listDisciplina: Array<Disciplina>;

  constructor(private aulaService: AulaService,
              private turmaService: TurmaService,
              private cursoService: CursoService,
              private disciplinaService: DisciplinaService) {

  }

  populaDiciplina(): void{
    this.listDisciplina = this.turma.curso.disciplinas;
  }

  ngOnInit(): void {
    this.cursoService.getListarCursos().subscribe(
      response => {
        this.responseCursos = response;
        this.listCurso = this.responseCursos.retorno;
      }
    );
    //this.turmaService.getListarTurmas().subscribe(
      //response => {
      //  this.responseTurmas = response;
      //  this.listTurma = this.responseTurmas.retorno;
      //}
    //);
    this.disciplinaService.getListarDisciplina().subscribe(
      response => {
        this.responseDisciplinas = response;
        this.listDisciplina = this.responseDisciplinas.retorno;
      }
    );
  }

  consultarAula(): void{

  }

  buscarAula(): void{
    this.aulaService.getBuscarAula(this.aula.idAula).subscribe(
      respose => {
        console.log(respose);
        this.aula = respose.retorno;
        //this.cordenador = this.curso.cordenadorEntity;
        this.qtTotalHora = 0;
        this.curso.disciplinas.forEach(element => {
          this.qtTotalHora += element.qtHora;
        });
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

  limparAula(): void{
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

  setNewTurma(curso: Curso): void {
    console.log(curso);
    this.turma.curso = curso;
    console.log(this.turma);
  }

  setNewDisciplina(disciplina: Disciplina): void{
    console.log(disciplina);
    this.disciplina = disciplina;
    console.log(this.disciplina);
  }

}
