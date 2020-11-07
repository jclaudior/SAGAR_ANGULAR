import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from './curso.model';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private readonly API = 'http://localhost:8080/disciplina';

  constructor(private http: HttpClient) { }

  getBuscarCurso(cdCurso: number): Observable<Curso>{
      return this.http.get<Curso>(`${this.API}/${cdCurso}`);  //http://localhost:8080/professor/1
  }

  postInserirCurso(curso: Curso): Observable<any>{
    return this.http.post<any>(`${this.API}`, curso);
  }
}
