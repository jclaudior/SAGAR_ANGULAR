import { ResponseTurma } from './../shared/responseTurma.model';
import { TurmaService } from './../shared/turma.service';
import { Turma } from '../shared/turma.model';
import { FormsModule }   from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turma-consultar',
  templateUrl: './turma-consultar.component.html',
  styleUrls: ['./turma-consultar.component.css']
})
export class TurmaConsultarComponent implements OnInit {

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

  cadastrarTurma(): void{
    
  }

  buscarTurma(): void{

  }

  limparTurma(): void{

  }
}
