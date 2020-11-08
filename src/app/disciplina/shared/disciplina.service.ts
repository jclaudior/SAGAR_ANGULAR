import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplina } from './disciplina.model';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private readonly API = "http://localhost:8080/disciplina";

  constructor(private http: HttpClient) { }

  getBuscarDisciplina(cdDisciplina: number): Observable<Disciplina>{
      return this.http.get<Disciplina>(`${this.API}/${cdDisciplina}`);
  }

  postInserirDisciplina(disciplina: Disciplina): Observable<any>{
      return this.http.post<any>(`${this.API}`, disciplina);
  }

}
