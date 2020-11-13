import { Dashboard } from './dashboard.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly API = 'http://localhost:8080/dashboard';

  constructor(private http: HttpClient) { }

  getTopAcessoAula(): Observable<Dashboard>{
    return this.http.get<Dashboard>(`${this.API}/2020-11-11/2020-11-13`);
  }
}
