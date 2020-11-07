import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';
//import { DisciplinaCadastrarComponent } from '.disciplina/disciplina-cadastrar/disciplina-cadastrar.component';
//import { TurmaConsultarComponent } from './turma/turma-consultar/turma-consultar.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'

  },

  {
    path: 'disciplinaCadastrar',
    //component: DiciplinaCadastrarComponent

  },
  
  {
  path: 'disciplinaConsultar',
    //component: DisciplinaConsultarComponent

  },

  {
    path: 'disciplinaAlterar',
    //component: DisciplinaAlterarComponent

  },
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
