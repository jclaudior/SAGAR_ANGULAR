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

  getBuscarTurma(turma: number): Observable<Turma>{
      return this.http.get<Turma>(`${this.API}/${turma}`);  //http://localhost:8080/turma/1
  }

  postInserirTurma(turma: Turma): Observable<any>{
    return this.http.post<any>(`${this.API}`, turma);
  }

  postAlterarTurma(turma: Turma): Observable<any>{
    return this.http.post<any>(`${this.API}`, turma);
  }
}
