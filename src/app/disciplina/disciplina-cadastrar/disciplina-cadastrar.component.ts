import { ResponseDisciplina } from './../shared/responseDisciplina';
import { DisciplinaService } from './../shared/disciplina.service';
import { Disciplina } from './../shared/disciplina.model';
import { NgForm }   from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-disciplina-cadastrar',
  templateUrl: './disciplina-cadastrar.component.html',
  styleUrls: ['./disciplina-cadastrar.component.css']
})
export class DisciplinaCadastrarComponent implements OnInit {
  
  @ViewChild('formDisciplina', {static: true}) formDisciplina: NgForm;

  requestSucess = false;
  mensagemModal = '';
  titleModal = '';
  cadastrando = false;

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

    console.log(this.disciplina);
    this.cadastrando = true;
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
            stDisciplina: true
          };
        }else{
          this.mensagemModal = this.responseDisciplina.mensagem;
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
            this.mensagemModal = `NomeDisciplina: ${error.error.retorno.nmDisciplina}, ja existe: ${error.error.retorno.idDisciplina} `;
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

}
