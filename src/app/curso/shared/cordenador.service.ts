import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseCordenador } from './cordenadorResponse';

@Injectable({
  providedIn: 'root'
})
export class CordenadorService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/cordenador';

  getBuscarCordenador(matricula: number): Observable<ResponseCordenador> {
    return this.http.get<ResponseCordenador>(`${this.API}/${matricula}`);
  }
}
