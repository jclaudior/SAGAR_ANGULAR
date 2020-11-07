import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { CursoCadastrarComponent} from './curso/curso-cadastrar/curso-cadastrar.component';
import { CursoConsultarComponent} from './curso/curso-consultar/curso-consultar.component';
import { CursoAlterarComponent} from './curso/curso-alterar/curso-alterar.component';

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
