import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// lo siguiente se agrega para poder usar funciones de archivos externos a angular como carruseles
// la funcion se le hizo el cambio en el archivo asssets/js/custom.js
// Uso de Scripts de archivos importados en el index.html en TypeScript
// Sección 7, Clase 64


declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar() {
    this.router.navigate(['/dashboard']);
  }
}
