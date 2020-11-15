import { AulaConsultarComponent } from './aula/aula-consultar/aula-consultar.component';
import { AulaEditarComponent } from './aula/aula-editar/aula-editar.component';
import { AulaCadastrarComponent } from './aula/aula-cadastrar/aula-cadastrar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { TurmaCadastrarComponent } from './turma/turma-cadastrar/turma-cadastrar.component';
import { TurmaEditarComponent } from './turma/turma-editar/turma-editar.component';
import { TurmaConsultarComponent } from './turma/turma-consultar/turma-consultar.component';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ProfessorCadastrarComponent } from './professor/professor-cadastrar/professor-cadastrar.component';
import { ProfessorConsultarComponent } from './professor/professor-consultar/professor-consultar.component';
import { ProfessorEditarComponent } from './professor/professor-editar/professor-editar.component';
import { CursoCadastrarComponent } from './curso/curso-cadastrar/curso-cadastrar.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { EditarCursoComponent } from './curso/editar-curso/editar-curso.component';
import { CursoConsultarComponent } from './curso/curso-consultar/curso-consultar.component';
import { HomeComponent } from './home/home.component';
import { DisciplinaCadastrarComponent } from './disciplina/disciplina-cadastrar/disciplina-cadastrar.component';
import { DisciplinaConsultarComponent } from './disciplina/disciplina-consultar/disciplina-consultar.component';
import { DisciplinaEditarComponent } from './disciplina/disciplina-editar/disciplina-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfessorCadastrarComponent,
    TurmaCadastrarComponent,
    TurmaEditarComponent,
    TurmaConsultarComponent,
    ProfessorConsultarComponent,
    ProfessorEditarComponent,
    CursoCadastrarComponent,
    EditarCursoComponent,
    CursoConsultarComponent,
    DisciplinaCadastrarComponent,
    DisciplinaConsultarComponent,
    DisciplinaEditarComponent,
    HomeComponent,
    AulaCadastrarComponent,
    AulaConsultarComponent,
    AulaEditarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AngularDualListBoxModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
