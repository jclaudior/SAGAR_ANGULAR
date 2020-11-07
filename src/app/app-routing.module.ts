import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { DisciplinaCadastrarComponent } from './disciplina/disciplina-cadastrar/disciplina-cadastrar.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'

  },

  {
    path: 'cursoCadastrar',
    component: CursoCadastrarComponent

  },
  
  {
  path: 'cursoConsultar',
    component: CursoConsultarComponent

  },

  {
    path: 'cursoAlterar',
    component: CursoAlterarComponent

  },
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
