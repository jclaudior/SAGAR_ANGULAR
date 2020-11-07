import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disciplina } from './disciplina.model';


@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private readonly API = 'http://localhost:8080/disciplina';

  constructor(private http: HttpClient) { }

  getBuscarDisciplina(cdDisciplina: number): Observable<Disciplina>{
      return this.http.get<Disciplina>(`${this.API}/${cdDisciplina}`);  //http://localhost:8080/professor/1
  }

  postInserirDisciplina(disciplina: Disciplina): Observable<any>{
    return this.http.post<any>(`${this.API}`, disciplina);
  }
}
