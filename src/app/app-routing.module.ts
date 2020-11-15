import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfessorCadastrarComponent } from './professor/professor-cadastrar/professor-cadastrar.component';
import { ProfessorConsultarComponent } from './professor/professor-consultar/professor-consultar.component';
import { ProfessorEditarComponent } from './professor/professor-editar/professor-editar.component';
import { TurmaCadastrarComponent } from './turma/turma-cadastrar/turma-cadastrar.component';
import { TurmaConsultarComponent } from './turma/turma-consultar/turma-consultar.component';
import { TurmaEditarComponent } from './turma/turma-editar/turma-editar.component';
import { CursoCadastrarComponent } from './curso/curso-cadastrar/curso-cadastrar.component';
import { CursoConsultarComponent } from './curso/curso-consultar/curso-consultar.component';
import { EditarCursoComponent } from './curso/editar-curso/editar-curso.component';
import { DisciplinaCadastrarComponent } from './disciplina/disciplina-cadastrar/disciplina-cadastrar.component';
import { DisciplinaConsultarComponent } from './disciplina/disciplina-consultar/disciplina-consultar.component';
import { DisciplinaEditarComponent } from './disciplina/disciplina-editar/disciplina-editar.component';
import { AulaCadastrarComponent } from './aula/aula-cadastrar/aula-cadastrar.component';
import { AulaEditarComponent } from './aula/aula-editar/aula-editar.component';
import { AulaConsultarComponent } from './aula/aula-consultar/aula-consultar.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'professorCadastrar',
    component: ProfessorCadastrarComponent

  },
  {
    path: 'ProfessorConsultar',
    component: ProfessorConsultarComponent
  },
  {
    path: 'ProfessorEditar',
    component: ProfessorEditarComponent
  },
  {
    path: 'turmaCadastrar',
    component: TurmaCadastrarComponent

  },
  {
    path: 'turmaConsultar',
    component: TurmaConsultarComponent

  },
  {
    path: 'turmaEditar',
    component: TurmaEditarComponent

  },
  {
    path: 'CursoCadastrar',
    component: CursoCadastrarComponent
  },
  {
    path: 'CursoConsultar',
    component: CursoConsultarComponent
  },
  {
    path: 'EditarCurso',
    component: EditarCursoComponent
  },
  {
    path: 'DisciplinaCadastrar',
    component: DisciplinaCadastrarComponent
  },
  {
    path: 'DisciplinaConsultar',
    component: DisciplinaConsultarComponent
  },
  {
    path: 'DisciplinaEditar',
    component: DisciplinaEditarComponent
  },
  {
    path: 'AulaCadastrar',
    component: AulaCadastrarComponent
  },
  {
    path: 'AulaConsultar',
    component: AulaConsultarComponent
  },
  {
    path: 'AulaEditar',
    component: AulaEditarComponent
  },
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
