import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { DisciplinaCadastrarComponent } from './disciplina/disciplina-cadastrar/disciplina-cadastrar.component';
import { DisciplinaConsultarComponent } from './disciplina/disciplina-consultar/disciplina-consultar.component';
import { DisciplinaAlterarComponent } from './disciplina/disciplina-alterar/disciplina-alterar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisciplinaCadastrarComponent,
    DisciplinaConsultarComponent,
    DisciplinaAlterarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
