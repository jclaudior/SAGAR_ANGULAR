import { DisciplinasResponse } from './disciplinaResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/disciplina';

  getListarDisciplina(): Observable<DisciplinasResponse>{
    return this.http.get<DisciplinasResponse>(`${this.API}`);
  }

}
