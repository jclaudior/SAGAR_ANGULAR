import { DisciplinasResponse } from '../shared/disciplinaResponse';
import { DisciplinaService } from '../shared/disciplina.service';
import { CursoService } from '../shared/curso.service';
import { Professor } from '../shared/professor.model';
import { Curso } from '../shared/curso.model';
import { Turma } from '../shared/turma.model';
import { Disciplina } from '../shared/disciplina.model';
import { Aula } from '../shared/aula.model';
import { CursosResponse } from '../shared/cursoResponse';
import { ResponseAula } from '../shared/aulaResponse';
import { AulaService } from '../shared/aula.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-aula-editar',
  templateUrl: './aula-editar.component.html',
  styleUrls: ['./aula-editar.component.css']
})
export class AulaEditarComponent implements OnInit {

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
  listDisciplina: Array<Disciplina>;

  constructor(private service: AulaService,
              private cursoService: CursoService,
              private disciplinaService: DisciplinaService) {

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
      }
    );
  }

  cadastrarTurma(): void{
    console.log(this.aula);
    this.cadastrando = true;
    this.service.postInserirAula(this.aula).subscribe(
      response => {
        console.log(response);
        this.requestSucess = true;
        this.responseAula = response;
        console.log(this.responseAula);
        this.titleModal = this.responseAula.mensagem;
        if (this.responseAula.retorno != null){
          this.mensagemModal = `Id_Aula: ${this.responseAula.retorno.idAula}`;
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

  buscarAula(): void{

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
