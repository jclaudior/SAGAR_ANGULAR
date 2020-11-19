import { Curso } from './../../turma/shared/curso.model';
import { ResponseAula, ResponseAulas } from './aulaResponse';
import { Aula } from './aula.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  private readonly API = 'http://localhost:8080/aula';

  constructor(private http: HttpClient) { }

  getBuscarAula(aula: number): Observable<ResponseAula>{
      return this.http.get<ResponseAula>(`${this.API}/${aula}`);
  }

  getBuscarAulaFiltro(cdCurso: number, cdTurma: number, idDisciplina: number, dtAula: Date): Observable<ResponseAulas>{
    return this.http.get<ResponseAulas>(`${this.API}/filtro/${cdCurso}/${cdTurma}/${idDisciplina}/${dtAula}`);
  }

  postInserirAula(aula: Aula): Observable<ResponseAula>{
    return this.http.post<ResponseAula>(`${this.API}`, aula);
  }

  postEditarAula(aula: Aula): Observable<ResponseAula>{
    return this.http.put<ResponseAula>(`${this.API}`, aula);
  }
}
