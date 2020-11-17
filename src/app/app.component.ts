import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router){

  }

  title = 'syntaxerrorangular';


  aula = true;
  professor = true;
  turma = true;
  disciplina = true;
  curso = true;



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

}

