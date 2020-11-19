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

  dataAula: Date;

  responseAulas: ResponseAulas;
  responseAula: ResponseAula;
  responseDisciplinas: DisciplinasResponse;
  responseCursos: CursosResponse;

  listCurso: Array<Curso>;
  listDisciplina: Array<Disciplina>;
  listTurma: Array<Turma>;

  constructor(private service: AulaService,
              private cursoService: CursoService,
              private disciplinaService: DisciplinaService,
              private turmaService: TurmaService) {

  }

  ngOnInit(): void {
    this.cursoService.getListarCursos().subscribe(
      response => {
        this.responseCursos = response;
        this.listCurso = this.responseCursos.retorno;
      }
    );
    this.disciplinaService.getListarDisciplina().subscribe(
      response => {
        this.responseDisciplinas = response;
        this.listDisciplina = this.responseDisciplinas.retorno;
        console.log(this.responseDisciplinas.retorno);
      }
    );

    this.turmaService.getListarTurma().subscribe(
      response => {
        this.listTurma = response.retorno;
      }
    );
  }

  buscarAula(): void{
    this.service.getBuscarAulaFiltro(this.curso.cdCurso, this.turma.cdTurma, this.disciplina.idDisciplina, this.dataAula).subscribe(
      response => {
        this.responseAulas = response;
        console.log(this.responseAulas);
      }
    );
  }

  limparAula(): void{
    window.location.reload();
  }

  setNewTurma(turma: Turma): void {
    console.log(turma);
    this.turma = turma ;
    console.log(this.turma);
  }

  setNewCurso(curso: Curso): void {
    console.log(curso);
    this.curso = curso;
    console.log(this.curso);
  }

  setNewDisciplina(disciplina: Disciplina): void{
    console.log(disciplina);
    this.disciplina = disciplina;
    console.log(this.disciplina);
  }

}
