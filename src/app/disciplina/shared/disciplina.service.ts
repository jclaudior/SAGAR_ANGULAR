import { ResponseDisciplina } from './responseDisciplina';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disciplina } from './disciplina.model';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private readonly API = "http://localhost:8080/disciplina";

  constructor(private http: HttpClient) { }

  postInserirDisciplina(disciplina: Disciplina): Observable<ResponseDisciplina >{
    return this.http.post<ResponseDisciplina >(`${this.API}`, disciplina);
  }

  getBuscarDisciplina(matricula: number): Observable<ResponseDisciplina>{
    return this.http.get<ResponseDisciplina >(`${this.API}/${matricula}`);
  }

  putAlterarDisciplina(disciplina: Disciplina): Observable<ResponseDisciplina >{
    return this.http.put<ResponseDisciplina >(`${this.API}`, disciplina);
  }

}
