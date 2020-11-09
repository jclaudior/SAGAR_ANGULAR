import { ResponseTurma } from './../shared/responseTurma.model';
import { TurmaService } from './../shared/turma.service';
import { Turma } from '../shared/turma.model';
import { FormsModule }   from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turma-cadastrar',
  templateUrl: './turma-cadastrar.component.html',
  styleUrls: ['./turma-cadastrar.component.css']
})
export class TurmaCadastrarComponent implements OnInit {

  turma: Turma = {
    cdCodigo: null,
    nmTurma: null,
    curso: null,
    dsPeriodo: null,
    stTurma: true,
  };

  responseTurma: ResponseTurma;

  constructor(private service: TurmaService) { }

  ngOnInit(): void {
  }

  cadastrarTurma(): void{
    this.service.postInserirTurma(this.turma).subscribe(
      response => {
        this.responseTurma = response;
        console.log(this.responseTurma);
      }

    );
  }
}
