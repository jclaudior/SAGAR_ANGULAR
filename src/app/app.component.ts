import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public router: Router){

  }

  title = 'syntaxerrorangular';

  isCordenador = true;

  aula = true;
  professor = true;
  turma = true;
  disciplina = true;
  curso = true;

  ngOnInit(): void {
    if (localStorage['professor'] != null){
      this.isCordenador = false;
    }
  }

showMenuAula(): void{
  this.aula =  !this.aula;
}

showMenuProfessor(): void{
  this.professor = !this.professor;
}

showMenuTurma(): void {
  this.turma = !this.turma;
}

showMenuDisciplina(): void {
  this.disciplina = !this.disciplina;
}

showMenuCurso(): void{
  this.curso = !this.curso;
}

sair(): void{
  localStorage.clear();
  //this.router.navigate(['/']);
  window.location.replace('/login')
}

}

