import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CursosService } from './cursos/cursos.service';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    BrowserModule
  ],
  // providers: [
  //   CursosService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
