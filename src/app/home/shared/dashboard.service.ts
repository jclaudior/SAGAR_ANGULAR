import { Disciplina } from './../../disciplina/shared/disciplina.model';
import { Dashboard } from './dashboard.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly API = 'http://localhost:8080/dashboard/aula';

  constructor(private http: HttpClient) { }

  getTopAcessoAula(dtInicial: string, dtFinal: string): Observable<Dashboard>{
    return this.http.get<Dashboard>(`${this.API}/top/${dtInicial}/${dtFinal}`);
  }

  getLowAcessoAula(dtInicial: string, dtFinal: string): Observable<Dashboard>{
    return this.http.get<Dashboard>(`${this.API}/low/${dtInicial}/${dtFinal}`);
  }

  getAcessoAulaDiciplina(dtInicial: string, dtFinal: string,  disciplina: Disciplina): Observable<Dashboard>{
    return this.http.get<Dashboard>(`${this.API}/${dtInicial}/${dtFinal}/${disciplina.nmDisciplina}`);
  }
}
