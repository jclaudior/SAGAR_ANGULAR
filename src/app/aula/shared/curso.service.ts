import { CursosResponse } from './cursoResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/curso';

  getListarCursos(): Observable<CursosResponse>{
    return this.http.get<CursosResponse>(`${this.API}`);
  }

}
