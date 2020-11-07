import { ResponseCurso } from '../shared/responseCurso.model';
import { CursoService } from '../shared/curso.service';
import { Curso } from './../shared/curso.model';
import { FormsModule }   from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-alterar',
  templateUrl: './curso-alterar.component.html',
  styleUrls: ['./curso-alterar.component.css']
})
export class CursoAlterarComponent implements OnInit {

  curso: Curso = {
    cdCurso: null,
    nmCurso: null,
    cdCoordenador: null,
    nmCoordenador: null,
    disciplinas: null
  };

  responseCurso: ResponseCurso;

  constructor(private service: CursoService) { }

  ngOnInit(): void {
  }

  buscarCurso(): void{
    
  }

  limparCurso(): void{
    
  }

  cadastrarCurso(): void{
    
  }
}
