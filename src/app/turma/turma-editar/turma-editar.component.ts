import { CursosResponse } from '../shared/cursoResponse';
import { CursoService } from './../shared/curso.service';
import { Curso } from './../shared/curso.model';
import { ResponseTurma } from './../shared/responseTurma.model';
import { TurmaService } from './../shared/turma.service';
import { Turma } from '../shared/turma.model';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-turma-editar',
  templateUrl: './turma-editar.component.html',
  styleUrls: ['./turma-editar.component.css']
})
export class TurmaEditarComponent implements OnInit {

  @ViewChild('formDisciplina', {static: true}) formDisciplina: NgForm;

  requestSucess = false;
  mensagemModal = '';
  titleModal = '';
  cadastrando = false;
  consulta = false;

  btnCadastrar = false;

  responseTurma: ResponseTurma;
  responseCursos: CursosResponse;

  curso: Curso = {
    cdCurso: null,
    nmCurso: null,
    qtHora: null
  };

  turma: Turma = {
    cdTurma: null,
    nmTurma: null,
    curso: this.curso,
    dsPeriodo: null,
    stTurma: true
  };

  listCurso: Array<Curso>;

  constructor(private service: TurmaService, private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.getListarCursos().subscribe(
      response=>{
        this.responseCursos = response;
        this.listCurso = this.responseCursos.retorno;
      }
    );
  }

  editarTurma(): void{
    this.service.postEditarTurma(this.turma).subscribe(
      response => {
        this.responseTurma = response;
        console.log(this.responseTurma);
      }

    );
  }

  cadastrarTurma(): void{
    console.log(this.turma);
    this.cadastrando = true;
    this.service.postInserirTurma(this.turma).subscribe(
      response => {
        console.log(response);
        this.requestSucess = true;
        this.responseTurma = response;
        console.log(this.responseTurma);
        this.titleModal = this.responseTurma.mensagem;
        if (this.responseTurma.retorno != null){
          this.mensagemModal = `IdTurma: ${this.responseTurma.retorno.cdTurma} NomeTurma: ${this.responseTurma.retorno.nmTurma}`;
          this.turma = {
            cdTurma: null,
            nmTurma: null,
            curso: null,
            dsPeriodo: null,
            stTurma: true
          };
        }else{
          this.mensagemModal = this.responseTurma.mensagem;
        }
        $('#mensagemModal').modal('show');
        this.cadastrando = false;
      },
      error => {
        console.log(error);
        this.requestSucess = false;
        if (error.error.mensagem != null){
          this.titleModal = error.error.mensagem;
          if(error.error.retorno != null){
            this.mensagemModal = `NomeTurma: ${error.error.retorno.nmTurma}, Já existe: ${error.error.retorno.cdTurma} `;
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

  buscarTurma(): void{
    this.service.getBuscarTurma(this.turma.cdTurma).subscribe(
      respose => {
        console.log(respose);
        this.turma = respose.retorno;
        this.consulta = true;
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

  alterarTurma(): void{
    console.log(this.turma);
    this.service.postEditarTurma(this.turma).subscribe(
      response => {
        this.requestSucess = true;
        this.responseTurma = response;
        this.titleModal = this.responseTurma.mensagem;
        if (this.responseTurma.retorno != null){
          this.mensagemModal = this.responseTurma.mensagem;
          this.turma = {
            cdTurma: null,
            nmTurma: null,
            curso: null,
            dsPeriodo: null,
            stTurma: true
          };
          this.consulta = false;
        }else{
          this.mensagemModal = this.responseTurma.mensagem;
        }
        $('#mensagemModal').modal('show');
      },
      error => {
        console.log(error);
        this.requestSucess = false;
        if (error.error.mensagem != null){
          this.titleModal = error.error.mensagem;
          this.mensagemModal = `Turma: ${error.error.retorno.nmTurma}, Já Existe: ${error.error.retorno.cdTurma} `;
        }else{
          this.titleModal = error.name;
          this.mensagemModal = error.message;
        }
        $('#mensagemModal').modal('show');
      }
    );
  }

  limparTurma(): void{
    this.consulta = false;
    this.turma = {
      cdTurma: null,
      nmTurma: null,
      curso: null,
      dsPeriodo: null,
      stTurma: true
    };
  }

  setNewCurso(curso: Curso): void {
    console.log(curso);
    this.turma.curso = curso;
    console.log(this.turma);
  }

}
