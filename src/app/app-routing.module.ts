import { ProfessorEditarComponent } from './professor/professor-editar/professor-editar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { ProfessorCadastrarComponent } from './professor/professor-cadastrar/professor-cadastrar.component';
import { TurmaCadastrarComponent } from './turma/turma-cadastrar/turma-cadastrar.component';
import { TurmaEditarComponent } from './turma/turma-editar/turma-editar.component';
import { TurmaConsultarComponent } from './turma/turma-consultar/turma-consultar.component';
import { ProfessorConsultarComponent } from './professor/professor-consultar/professor-consultar.component';


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
  }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
