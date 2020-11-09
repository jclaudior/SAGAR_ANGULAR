import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Professor } from '../shared/professor.model';
import { ProfessorService } from '../shared/professor.service';
import { ResponseProfessor } from '../shared/responseProfessor.model';

declare var $: any;

@Component({
  selector: 'app-professor-editar',
  templateUrl: './professor-editar.component.html',
  styleUrls: ['./professor-editar.component.css']
})
export class ProfessorEditarComponent implements OnInit {

  @ViewChild('formProfessor', {static: true}) formProfessor: NgForm;


  requestSucess = false;
  mensagemModal = '';
  titleModal = '';
  consulta = false;

  btnCadastrar = false;
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  professor: Professor = {
    cdMatricula: null,
    nmProfessor: null,
    dsEmail: null,
    dsCelular: null,
    pwAcesso: null,
    stProfessor: true
  };

  responseProfessor: ResponseProfessor;

  constructor(private service: ProfessorService) { }

  ngOnInit(): void {
  }

  cadastrarProfessor(): void{
    this.service.postInserirProfessor(this.professor).subscribe(
      response => {
        this.requestSucess = true;
        this.responseProfessor = response;
        this.titleModal = this.responseProfessor.mensagem;
        if (this.responseProfessor.retorno != null){
          this.mensagemModal = `Matricula: ${this.responseProfessor.retorno.cdMatricula} Professor: ${this.responseProfessor.retorno.nmProfessor}`;
          this.professor = {
            cdMatricula: null,
            nmProfessor: null,
            dsEmail: null,
            dsCelular: null,
            pwAcesso: null,
            stProfessor: null
          };
        }else{
          this.mensagemModal = this.responseProfessor.mensagem;
        }
        $('#mensagemModal').modal('show');
      },
      error => {
        console.log(error);
        this.requestSucess = false;
        if (error.error.mensagem != null){
          this.titleModal = error.error.mensagem;
          this.mensagemModal = `Professor: ${error.error.retorno.nmProfessor}, ja esta ultilizando a Matricula: ${error.error.retorno.cdMatricula} `;
        }else{
          this.titleModal = error.name;
          this.mensagemModal = error.message;
        }
        $('#mensagemModal').modal('show');
      }
    );
  }

  alterarProfessor(): void{
    console.log(this.professor);
    this.service.putAlterarProfessor(this.professor).subscribe(
      response => {
        this.requestSucess = true;
        this.responseProfessor = response;
        this.titleModal = this.responseProfessor.mensagem;
        if (this.responseProfessor.retorno != null){
          this.mensagemModal = this.responseProfessor.mensagem;
          this.professor = {
            cdMatricula: null,
            nmProfessor: null,
            dsEmail: null,
            dsCelular: null,
            pwAcesso: null,
            stProfessor: null
          };
          this.consulta = false;
        }else{
          this.mensagemModal = this.responseProfessor.mensagem;
        }
        $('#mensagemModal').modal('show');
      },
      error => {
        console.log(error);
        this.requestSucess = false;
        if (error.error.mensagem != null){
          this.titleModal = error.error.mensagem;
          this.mensagemModal = `Professor: ${error.error.retorno.nmProfessor}, ja esta ultilizando a Matricula: ${error.error.retorno.cdMatricula} `;
        }else{
          this.titleModal = error.name;
          this.mensagemModal = error.message;
        }
        $('#mensagemModal').modal('show');
      }
    );
  }

  consultarProfessor(): void {
    this.service.getBuscarProfessor(this.professor.cdMatricula).subscribe(
      respose => {
        console.log(respose);
        this.professor = respose.retorno;
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

  limpa(): void {
    this.professor = {
      cdMatricula: null,
      nmProfessor: null,
      dsEmail: null,
      dsCelular: null,
      pwAcesso: null,
      stProfessor: null
    };
    this.consulta = false;
  }


}
