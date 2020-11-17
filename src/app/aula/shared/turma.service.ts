import { TurmasResponse } from './turmaResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/curso';

  getListarTurmas(): Observable<TurmasResponse>{
    return this.http.get<TurmasResponse>(`${this.API}`);
  }

}
