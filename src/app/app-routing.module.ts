import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { ProfessorCadastrarComponent } from './professor/professor-cadastrar/professor-cadastrar.component';
import { TurmaCadastrarComponent } from './turma/turma-cadastrar/turma-cadastrar.component';
import { TurmaAlterarComponent } from './turma/turma-alterar/turma-alterar.component';
import { TurmaConsultarComponent } from './turma/turma-consultar/turma-consultar.component';


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
    path: 'turmaAlterar',
    component: TurmaAlterarComponent

  },

  {
    path: 'turmaAlterar',
    component: TurmaConsultarComponent

  },
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
