import { Component, OnInit } from '@angular/core';
import { Professor } from '../shared/professor.model';
import { ProfessorService } from '../shared/professor.service';

declare var $: any;

@Component({
  selector: 'app-professor-consultar',
  templateUrl: './professor-consultar.component.html',
  styleUrls: ['./professor-consultar.component.css']
})
export class ProfessorConsultarComponent implements OnInit {

  titleModal = '';
  mensagemModal = '';
  requestSucess = false;

  professor: Professor = {
    cdMatricula: null,
    nmProfessor: null,
    dsEmail: null,
    dsCelular: null,
    pwAcesso: null,
    stProfessor: null
  };

  constructor(private service: ProfessorService) { }

  ngOnInit(): void {
  }

  consultarProfessor(): void {
    this.service.getBuscarProfessor(this.professor.cdMatricula).subscribe(
      respose => {
        console.log(respose);
        this.professor = respose.retorno;
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
  }
}
