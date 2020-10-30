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

  getBuscarProfessor(matricula: number): Observable<Professor>{
      return this.http.get<Professor>(`${this.API}/${matricula}`);  //http://localhost:8080/professor/1
  }

  postInserirProfessor(professor: Professor): Observable<any>{
    return this.http.post<any>(`${this.API}`, professor);
  }
}
