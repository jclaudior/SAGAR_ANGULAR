import { ResponseDisciplina } from './../shared/responseDisciplina.model';
import { DisciplinaService } from './../shared/disciplina.service';
import { Disciplina } from './../shared/disciplina.model';
import { FormsModule }   from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina-cadastrar',
  templateUrl: './disciplina-cadastrar.component.html',
  styleUrls: ['./disciplina-cadastrar.component.css']
})
export class DisciplinaCadastrarComponent implements OnInit {

  disciplina: Disciplina = {
    cdDisciplina: null,
    nmDisciplina: null,
    cargaHoraria: null,
    status: null,
  };

  responseDisciplina: ResponseDisciplina;

  constructor(private service: DisciplinaService) { }

  ngOnInit(): void {
  }

  cadastrarDisciplina(): void{
    this.service.postInserirDisciplina(this.disciplina).subscribe(
      response => {
        this.responseDisciplina = response;
        console.log(this.responseDisciplina);
      }
    );
  }
}
