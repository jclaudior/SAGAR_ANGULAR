import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProfessorCadastrarComponent } from './professor/professor-cadastrar/professor-cadastrar.component';
import { ProfessorConsultarComponent } from './professor/professor-consultar/professor-consultar.component';
import { ProfessorEditarComponent } from './professor/professor-editar/professor-editar.component';
import { TurmaCadastrarComponent } from './turma/turma-cadastrar/turma-cadastrar.component';
import { TurmaConsultarComponent } from './turma/turma-consultar/turma-consultar.component';
import { TurmaEditarComponent } from './turma/turma-editar/turma-editar.component';
import { CursoCadastrarComponent } from './curso/curso-cadastrar/curso-cadastrar.component';
import { CursoConsultarComponent } from './curso/curso-consultar/curso-consultar.component';
import { EditarCursoComponent } from './curso/editar-curso/editar-curso.component';
import { DisciplinaCadastrarComponent } from './disciplina/disciplina-cadastrar/disciplina-cadastrar.component';
import { DisciplinaConsultarComponent } from './disciplina/disciplina-consultar/disciplina-consultar.component';
import { DisciplinaEditarComponent } from './disciplina/disciplina-editar/disciplina-editar.component';
import { AulaCadastrarComponent } from './aula/aula-cadastrar/aula-cadastrar.component';
import { AulaEditarComponent } from './aula/aula-editar/aula-editar.component';
import { AulaConsultarComponent } from './aula/aula-consultar/aula-consultar.component';
import { HomeComponent } from './home/home.component';
import { ConversaComponent } from './conversa/conversa.component';
import { EstatisticaAcessoComponent } from './estatistica-acesso/estatistica-acesso.component';
import {
  AuthGuardService as AuthGuard
} from './auth/auth-grarg.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'professorCadastrar',
    component: ProfessorCadastrarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ProfessorConsultar',
    component: ProfessorConsultarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ProfessorEditar',
    component: ProfessorEditarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'turmaCadastrar',
    component: TurmaCadastrarComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'turmaConsultar',
    component: TurmaConsultarComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'turmaEditar',
    component: TurmaEditarComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'CursoCadastrar',
    component: CursoCadastrarComponent,
    canActivate: [AuthGuard]
   },
  {
    path: 'CursoConsultar',
    component: CursoConsultarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'EditarCurso',
    component: EditarCursoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'DisciplinaCadastrar',
    component: DisciplinaCadastrarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'DisciplinaConsultar',
    component: DisciplinaConsultarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'DisciplinaEditar',
    component: DisciplinaEditarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'AulaCadastrar',
    component: AulaCadastrarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'AulaConsultar',
    component: AulaConsultarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'AulaEditar',
    component: AulaEditarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'Conversa',
    component: ConversaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'EstatisticaAcesso',
    component: EstatisticaAcessoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
