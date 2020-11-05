import { ResponseProfessor } from './../shared/responseProfessor.model';
import { ProfessorService } from './../shared/professor.service';
import { Professor } from './../shared/professor.model';
import { FormsModule }   from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-cadastrar',
  templateUrl: './professor-cadastrar.component.html',
  styleUrls: ['./professor-cadastrar.component.css']
})
export class ProfessorCadastrarComponent implements OnInit {

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
        this.responseProfessor = response;
        console.log(this.responseProfessor);
      }

    );
  }
}
