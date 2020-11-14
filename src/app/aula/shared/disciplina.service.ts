import { DisciplinaResponse } from './disciplinaResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from './curso.model';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/curso';

  getListarDisciplina(): Observable<DisciplinaResponse>{
    return this.http.get<DisciplinaResponse>(`${this.API}`);
  }

}
