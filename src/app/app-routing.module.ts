import { CursoCadastrarComponent } from './curso/curso-cadastrar/curso-cadastrar.component';
import { ProfessorEditarComponent } from './professor/professor-editar/professor-editar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { ProfessorCadastrarComponent } from './professor/professor-cadastrar/professor-cadastrar.component';
import { TurmaCadastrarComponent } from './turma/turma-cadastrar/turma-cadastrar.component';
import { TurmaEditarComponent } from './turma/turma-editar/turma-editar.component';
import { TurmaConsultarComponent } from './turma/turma-consultar/turma-consultar.component';
import { ProfessorConsultarComponent } from './professor/professor-consultar/professor-consultar.component';
import { EditarCursoComponent } from './curso/editar-curso/editar-curso.component';
import { CursoConsultarComponent } from './curso/curso-consultar/curso-consultar.component';
import { DisciplinaCadastrarComponent } from './disciplina/disciplina-cadastrar/disciplina-cadastrar.component';
import { DisciplinaConsultarComponent } from './disciplina/disciplina-consultar/disciplina-consultar.component';
import { DisciplinaEditarComponent } from './disciplina/disciplina-editar/disciplina-editar.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'

  },

  {
    path: 'professorCadastrar',
    component: ProfessorCadastrarComponent

  },

  {
    path: 'turmaCadastrar',
    component: TurmaCadastrarComponent

  },

  {
    path: 'turmaEditar',
    component: TurmaEditarComponent

  },

  {
    path: 'turmaConsultar',
    component: TurmaConsultarComponent

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
    path: 'CursoCadastrar',
    component: CursoCadastrarComponent
  },
  {
    path: 'EditarCurso',
    component: EditarCursoComponent
  },
  {
    path: 'CursoConsultar',
    component: CursoConsultarComponent
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
    path: 'Home',
    component: HomeComponent
  }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
