import { ResponseCordenador } from './../../curso/shared/cordenadorResponse';
import { Professor } from './../../professor/shared/professor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseProfessor } from 'src/app/professor/shared/responseProfessor.model';
import { Observable } from 'rxjs';
import { Cordenador } from 'src/app/curso/shared/cordenador.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/login';

  postLoginProfessor(professor: Professor): Observable<ResponseProfessor>{
    return this.http.post<ResponseProfessor>(`${this.API}/professor`, professor);
  }

  postLoginCordenador(cordenador: Cordenador): Observable<ResponseCordenador>{
    return this.http.post<ResponseCordenador>(`${this.API}/cordenador`, cordenador);
  }

}
