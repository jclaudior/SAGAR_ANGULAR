import { ProfessorService } from './../professor/shared/professor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversa',
  templateUrl: './conversa.component.html',
  styleUrls: ['./conversa.component.css']
})
export class ConversaComponent implements OnInit {

  url : string = "api.whatsapp.com/send?phone=55";

  professor : Professor = {
    cdMatricula: null,
    nmProfessor: null,
    dsEmail: null,
    dsCelular: null,
    pwAcesso: null,
    stProfessor: true,
  }
  constructor(private professorService : ProfessorService) {}

  ngOnInit(): void {
  }

  consultarNumero() : void{
    this.professorService.getBuscarProfessor(this.professor.cdMatricula).subscribe(
      response => {
        this.professor = response.retorno;
        this.url += this.professor.dsCelular;
        window.open(this.url, '_blank');
      }
    );
  }

}
