import { CursosModule } from './cursos/cursos.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CursosService } from './cursos/cursos.service';
import { LogService } from './shared/log.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [LogService],
  // providers: [
  //   CursosService
  // ],
  bootstrap: [AppComponent],
})
export class AppModule { }
