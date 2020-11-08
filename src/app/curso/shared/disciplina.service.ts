import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscipinasResponse } from './disciplinasResponse';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/disciplina';

  getListarDisciplinas(): Observable<DiscipinasResponse>{
    return this.http.get<DiscipinasResponse>(`${this.API}`);
  }
}
