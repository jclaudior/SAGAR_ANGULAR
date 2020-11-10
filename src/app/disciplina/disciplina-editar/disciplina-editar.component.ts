import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Disciplina } from '../shared/disciplina.model';
import { DisciplinaService } from '../shared/disciplina.service';
import { ResponseDisciplina } from '../shared/responseDisciplina';

declare var $: any;

@Component({
  selector: 'app-disciplina-editar',
  templateUrl: './disciplina-editar.component.html',
  styleUrls: ['./disciplina-editar.component.css']
})
export class DisciplinaEditarComponent implements OnInit {

  @ViewChild('formDisciplina', {static: true}) formDisciplina: NgForm;

  requestSucess = false;
  mensagemModal = '';
  titleModal = '';
  consulta = false;

  btnCadastrar = false;

  disciplina: Disciplina = {
    idDisciplina: null,
    nmDisciplina: null,
    qtHora: null,
    stDisciplina: null
  };

  responseDisciplina: ResponseDisciplina;

  constructor(private service: DisciplinaService) { }

  ngOnInit(): void {
  }

  cadastrarDisciplina(): void{
    this.service.postInserirDisciplina(this.disciplina).subscribe(
      response => {
        this.requestSucess = true;
        this.responseDisciplina = response;
        this.titleModal = this.responseDisciplina.mensagem;
        if (this.responseDisciplina.retorno != null){
          this.mensagemModal = `IdDisciplina: ${this.responseDisciplina.retorno.idDisciplina} NomeDisciplina: ${this.responseDisciplina.retorno.nmDisciplina}`;
          this.disciplina = {
            idDisciplina: null,
            nmDisciplina: null,
            qtHora: null,
            stDisciplina: null
          };
        }else{
          this.mensagemModal = this.responseDisciplina.mensagem;
        }
        $('#mensagemModal').modal('show');
      },
      error => {
        console.log(error);
        this.requestSucess = false;
        if (error.error.mensagem != null){
          this.titleModal = error.error.mensagem;
          this.mensagemModal = `Disciplina: ${error.error.retorno.nmDisciplina}, Já existe: ${error.error.retorno.idDisciplina} `;
        }else{
          this.titleModal = error.name;
          this.mensagemModal = error.message;
        }
        $('#mensagemModal').modal('show');
      }
    );
  }

  alterarDisciplina(): void{
    console.log(this.disciplina);
    this.service.postAlterarDisciplina(this.disciplina).subscribe(
      response => {
        this.requestSucess = true;
        this.responseDisciplina = response;
        this.titleModal = this.responseDisciplina.mensagem;
        if (this.responseDisciplina.retorno != null){
          this.mensagemModal = this.responseDisciplina.mensagem;
          this.disciplina = {
            idDisciplina: null,
            nmDisciplina: null,
            qtHora: null,
            stDisciplina: null
          };
          this.consulta = false;
        }else{
          this.mensagemModal = this.responseDisciplina.mensagem;
        }
        $('#mensagemModal').modal('show');
      },
      error => {
        console.log(error);
        this.requestSucess = false;
        if (error.error.mensagem != null){
          this.titleModal = error.error.mensagem;
          this.mensagemModal = `Disciplina: ${error.error.retorno.nmDisciplina}, Já Existe: ${error.error.retorno.idDisciplina} `;
        }else{
          this.titleModal = error.name;
          this.mensagemModal = error.message;
        }
        $('#mensagemModal').modal('show');
      }
    );
  }

  consultarDisciplina(): void {
    this.service.getBuscarDisciplina(this.disciplina.idDisciplina).subscribe(
      respose => {
        console.log(respose);
        this.disciplina = respose.retorno;
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
    this.disciplina = {
      idDisciplina: null,
      nmDisciplina: null,
      qtHora: null,
      stDisciplina: null
    };
    this.consulta = false;
  }

}
