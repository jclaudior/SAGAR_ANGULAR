import { ResponseProfessor } from './responseProfessor.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from './professor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private readonly API = 'http://localhost:8080/professor';

  constructor(private http: HttpClient) { }

  getBuscarProfessor(matricula: number): Observable<ResponseProfessor>{
      return this.http.get<ResponseProfessor >(`${this.API}/${matricula}`);
  }

  postInserirProfessor(professor: Professor): Observable<ResponseProfessor >{
    return this.http.post<ResponseProfessor >(`${this.API}`, professor);
  }
}
