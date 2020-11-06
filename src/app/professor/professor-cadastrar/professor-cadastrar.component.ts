import { ResponseProfessor } from './../shared/responseProfessor.model';
import { ProfessorService } from './../shared/professor.service';
import { Professor } from './../shared/professor.model';
import { NgForm } from '@angular/forms';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';



declare var $: any;



@Component({
  selector: 'app-professor-cadastrar',
  templateUrl: './professor-cadastrar.component.html',
  styleUrls: ['./professor-cadastrar.component.css']
})
export class ProfessorCadastrarComponent implements OnInit {

  @ViewChild('formProfessor', {static: true}) formProfessor: NgForm;

  requestSucess = false;
  mensagemModal = '';
  titleModal = '';

  btnCadastrar = false;
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  professor: Professor = {
    cdMatricula: null,
    nmProfessor: null,
    dsEmail: null,
    dsCelular: null,
    pwAcesso: null
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


  validaForm(){

  }
}
