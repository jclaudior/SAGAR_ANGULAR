import { Cordenador } from './../curso/shared/cordenador.model';
import { Professor } from './../professor/shared/professor.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = false;
  mensagem = '';
  isProfessor = true;

  matricula = null;
  senha = null;

  professor: Professor = {
    cdMatricula: null,
    nmProfessor: null,
    dsEmail: null,
    dsCelular: null,
    pwAcesso: null,
    stProfessor: true
  };
  cordenador: Cordenador = {
    cdMatricula: null,
    nmCordenador: null,
    pwAcesso: null,
    stCordenador: true,
  };

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }


  logar(): void {
    if (this.isProfessor) {
      this.professor.cdMatricula = this.matricula;
      this.professor.pwAcesso = this.senha;
      console.log(this.professor);
      this.loginService.postLoginProfessor(this.professor).subscribe(
        response => {
          this.professor = response.retorno;
          localStorage['professor'] = JSON.stringify(this.professor);
          localStorage.removeItem('cordenador');
          this.error = true;
          localStorage['reload'] = 1;
          this.router.navigate(['/Home']);

        },
        error => {
          this.error = true;
          if (error.error.mensagem != null) {
            this.mensagem = error.error.mensagem;
          } else {
            this.mensagem = error.message;
          }
        }
      );
    } else {
      this.cordenador.cdMatricula = this.matricula;
      this.cordenador.pwAcesso = this.senha;
      this.loginService.postLoginCordenador(this.cordenador).subscribe(
        response => {
          this.cordenador = response.retorno;
          localStorage['cordenador'] = JSON.stringify(this.cordenador);
          localStorage.removeItem('professor');
          this.error = true;
          localStorage['reload'] = 1;
          this.router.navigate(['/Home']);
        },
        error => {
          this.error = true;
          if (error.error.mensagem != null) {
            this.mensagem = error.error.mensagem;
          } else {
            this.mensagem = error.message;
          }
        }
      );
    }
  }

}
