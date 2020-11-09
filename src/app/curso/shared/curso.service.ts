import { ResponseCurso } from './cursoResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from './curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/curso';

  postCadastrarCurso(curso: Curso): Observable<ResponseCurso>{
    return this.http.post<ResponseCurso>(`${this.API}`, curso);
  }
}
