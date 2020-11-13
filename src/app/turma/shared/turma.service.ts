import { ResponseTurma } from './responseTurma.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turma } from './turma.model';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private readonly API = 'http://localhost:8080/turma';

  constructor(private http: HttpClient) { }

  getBuscarTurma(turma: number): Observable<ResponseTurma>{
      return this.http.get<ResponseTurma>(`${this.API}/${turma}`);  //http://localhost:8080/turma/1
  }

  postInserirTurma(turma: Turma): Observable<ResponseTurma>{
    return this.http.post<ResponseTurma>(`${this.API}`, turma);
  }

  postEditarTurma(turma: Turma): Observable<ResponseTurma>{
    return this.http.post<ResponseTurma>(`${this.API}`, turma);
  }
}
