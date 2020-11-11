import { ResponseTurma } from './../shared/responseTurma.model';
import { TurmaService } from './../shared/turma.service';
import { Turma } from '../shared/turma.model';
import { FormsModule }   from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turma-editar',
  templateUrl: './turma-editar.component.html',
  styleUrls: ['./turma-editar.component.css']
})
export class TurmaEditarComponent implements OnInit {

  turma: Turma = {
    cdCodigo: null,
    nmTurma: null,
    curso: null,
    dsPeriodo: null,
    stTurma: true
  };

  responseTurma: ResponseTurma;

  constructor(private service: TurmaService) { }

  ngOnInit(): void {
  }

  editarTurma(): void{
    this.service.postEditarTurma(this.turma).subscribe(
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
