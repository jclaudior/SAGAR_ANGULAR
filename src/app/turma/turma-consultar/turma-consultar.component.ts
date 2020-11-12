import { ResponseTurma } from './../shared/responseTurma.model';
import { TurmaService } from './../shared/turma.service';
import { Turma } from '../shared/turma.model';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-turma-consultar',
  templateUrl: './turma-consultar.component.html',
  styleUrls: ['./turma-consultar.component.css']
})
export class TurmaConsultarComponent implements OnInit {

  @ViewChild('formDisciplina', {static: true}) formDisciplina: NgForm;

  requestSucess = false;
  mensagemModal = '';
  titleModal = '';
  cadastrando = false;
  consulta = false;

  btnCadastrar = false;

  turma: Turma = {
    cdCodigo: null,
    nmTurma: null,
    curso: null,
    dsPeriodo: null,
    stTurma: true
  };

  responseTurma: ResponseTurma;
  TurmaService: any;

  constructor(private service: TurmaService) { }

  ngOnInit(): void {
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
          this.mensagemModal = `IdTurma: ${this.responseTurma.retorno.cdCodigo} NomeTurma: ${this.responseTurma.retorno.nmTurma}`;
          this.turma = {
            cdCodigo: null,
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
            this.mensagemModal = `NomeTurma: ${error.error.retorno.nmTurma}, Já existe: ${error.error.retorno.cdCodigo} `;
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
    this.service.getBuscarTurma(this.turma.cdCodigo).subscribe(
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

  limparTurma(): void{
    this.consulta = false;
    this.turma = {
      cdCodigo: null,
      nmTurma: null,
      curso: null,
      dsPeriodo: null,
      stTurma: true
    };
  }
}
