import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes: Ajustes = {
    temaURL: 'assets/css/colors/default-dark.css',
    tema: 'default-dark'
  };

  // 1 forma para hacer una referenci al dom general para cambiar el style de la pagina que esta en el index.html
//  se hace el @inject del constructor
  // tslint:disable-next-line:variable-name
  constructor(  @Inject(DOCUMENT ) private _document ) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    // console.log('Guardado en le local storage');
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
  }

  cargarAjustes() {
    if ( localStorage.getItem('ajustes') ) {
      this.ajustes =  JSON.parse(localStorage.getItem('ajustes'));
      // console.log('Cargado del localstogare');
      this.aplicarTema(this.ajustes.tema);
    } else {
      // console.log('Cargado del valor por defecto');
      this.aplicarTema(this.ajustes.tema);

    }
  }

  aplicarTema( tema: string ) {
    const url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);
  
    this.ajustes.tema = tema;
    this.ajustes.temaURL = url;
  
    this.guardarAjustes();
  }

}

interface Ajustes {
  temaURL: string;
  tema: string;
}
