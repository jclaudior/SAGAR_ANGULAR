import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../shared/disciplina.model';
import { DisciplinaService } from '../shared/disciplina.service';

declare var $: any;

@Component({
  selector: 'app-disciplina-consultar',
  templateUrl: './disciplina-consultar.component.html',
  styleUrls: ['./disciplina-consultar.component.css']
})
export class DisciplinaConsultarComponent implements OnInit {

  titleModal = '';
  mensagemModal = '';
  requestSucess = false;

  disciplina: Disciplina = {
    idDisciplina: null,
    nmDisciplina: null,
    qtHora: null,
    stDisciplina: null
  };

  constructor(private service: DisciplinaService) { }

  ngOnInit(): void {
  }

  consultarDisciplina(): void {
    this.service.getBuscarDisciplina(this.disciplina.idDisciplina).subscribe(
      respose => {
        console.log(respose);
        this.disciplina = respose.retorno;
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
  }
}
