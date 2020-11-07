import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { DisciplinaCadastrarComponent } from './disciplina/disciplina-cadastrar/disciplina-cadastrar.component';
import { DisciplinaConsultarComponent} from './disciplina/disciplina-consultar/disciplina-consultar.component';
import { DisciplinaAlterarComponent } from './disciplina/disciplina-alterar/disciplina-alterar.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'

  },

  {
    path: 'disciplinaCadastrar',
    component: DisciplinaCadastrarComponent

  },
  
  {
  path: 'disciplinaConsultar',
    component: DisciplinaConsultarComponent

  },

  {
    path: 'disciplinaAlterar',
    component: DisciplinaAlterarComponent

  },
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
