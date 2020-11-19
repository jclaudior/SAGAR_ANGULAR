import { CursoService } from './../shared/curso.service';
import { Component, OnInit } from '@angular/core';
import { Cordenador } from '../shared/cordenador.model';
import { Curso } from '../shared/curso.model';

declare var $: any;

@Component({
  selector: 'app-curso-consultar',
  templateUrl: './curso-consultar.component.html',
  styleUrls: ['./curso-consultar.component.css']
})
export class CursoConsultarComponent implements OnInit {

  titleModal = '';
  mensagemModal = '';
  requestSucess = false;

  qtTotalHora = 0;

  cordenador: Cordenador = {
    cdMatricula: null,
    nmCordenador: null,
    pwAcesso: null,
    stCordenador: true,
  };

  curso: Curso = {
    cdCurso: null,
    nmCurso: null,
    qtHora: null,
    cordenadorEntity: this.cordenador,
    disciplinas: [],
    stCurso: null
  };

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
  }

  buscarCurso(): void{
    this.cursoService.getBuscarCurso(this.curso.cdCurso).subscribe(
      respose => {
        console.log(respose);
        this.curso = respose.retorno;
        this.cordenador = this.curso.cordenadorEntity;
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

  limpar(): void{
    this.cordenador = {
      cdMatricula: null,
      nmCordenador: null,
      pwAcesso: null,
      stCordenador: true,
    };

    this.curso = {
      cdCurso: null,
      nmCurso: null,
      qtHora: null,
      cordenadorEntity: this.cordenador,
      disciplinas: [],
      stCurso: null

    };

  }

}
