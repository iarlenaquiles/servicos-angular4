import { Injectable } from '@angular/core';


@Injectable()
export class CursosService {

  constructor() {
    console.log('CursosService');
   }

  getCursos() {
    return ['Angular2', 'Java', 'JS'];
  }
}
