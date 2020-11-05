import { ResponseTurma } from './../shared/responseTurma.model';
import { TurmaService } from './../shared/turma.service';
import { Turma } from '../shared/turma.model';
import { FormsModule }   from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turma-alterar',
  templateUrl: './turma-alterar.component.html',
  styleUrls: ['./turma-alterar.component.css']
})
export class TurmaAlterarComponent implements OnInit {

  turma: Turma = {
    cdTurma: null,
    cdCurso: null,
    turma: null,
    periodo: null,
    status: null
  };

  responseTurma: ResponseTurma;

  constructor(private service: TurmaService) { }

  ngOnInit(): void {
  }

  alterarTurma(): void{
    this.service.postAlterarTurma(this.turma).subscribe(
      response => {
        this.responseTurma = response;
        console.log(this.responseTurma);
      }

    );
  }

  buscarTurma(): void{
    
  }

  limparTurma(): void{
    
  }

}
