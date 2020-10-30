import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProfessorCadastrarComponent } from './professor/professor-cadastrar/professor-cadastrar.component';


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
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
