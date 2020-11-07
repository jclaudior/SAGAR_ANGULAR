import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProfessorCadastrarComponent } from './professor/professor-cadastrar/professor-cadastrar.component';
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
    path: 'ProfessorConsultar',
    component: ProfessorConsultarComponent
  }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
