import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DemoAppComponent } from './demo-app.component';
import { FormsModule }   from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { CursoAlterarComponent } from './curso/curso-alterar/curso-alterar.component';
import { CursoCadastrarComponent } from './curso/curso-cadastrar/curso-cadastrar.component';
import { CursoConsultarComponent } from './curso/curso-consultar/curso-consultar.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoAppComponent,
    HeaderComponent,
    CursoCadastrarComponent,
    CursoConsultarComponent,
    CursoAlterarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularDualListBoxModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent,
    DemoAppComponent
  ]
})

export class AppModule { }
