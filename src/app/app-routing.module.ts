import { ProfessorEditarComponent } from './professor/professor-editar/professor-editar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProfessorCadastrarComponent } from './professor/professor-cadastrar/professor-cadastrar.component';
import { ProfessorConsultarComponent } from './professor/professor-consultar/professor-consultar.component';
import { DisciplinaCadastrarComponent } from './disciplina/disciplina-cadastrar/disciplina-cadastrar.component';
import { DisciplinaConsultarComponent } from './disciplina/disciplina-consultar/disciplina-consultar.component';
import { DisciplinaEditarComponent } from './disciplina/disciplina-editar/disciplina-editar.component';


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
    path: 'ProfessorConsultar',
    component: ProfessorConsultarComponent
  },
  {
    path: 'ProfessorEditar',
    component: ProfessorEditarComponent
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
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
