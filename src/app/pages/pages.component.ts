import { Component, OnInit } from '@angular/core';

// lo siguiente se agrega para poder usar funciones de archivos externos a angular como carruseles
// la funcion se le hizo el cambio en el archivo asssets/js/custom.js
// Uso de Scripts de archivos importados en el index.html en TypeScript
// Sección 7, Clase 64


declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
