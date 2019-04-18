import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.models';

// lo siguiente se agrega para poder usar funciones de archivos externos a angular como carruseles
// la funcion se le hizo el cambio en el archivo asssets/js/custom.js
// Uso de Scripts de archivos importados en el index.html en TypeScript
// Sección 7, Clase 64


declare function init_plugins();
// le decimos a angular qeu trabaje con una libreria llamada gapi la del login de ggogle
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  recuerdame: boolean = false;
  email: string;

  auth2: any;

  constructor(
    public router: Router,
    // tslint:disable-next-line:variable-name
    public _usuarioService: UsuarioService
   ) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';

    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '568894357501-7ivb17q2sghnccup5is5vi4bp5nshfb3.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSingin( document.getElementById('btnGoogle') );

    });
  }

  attachSingin( element ) {
    this.auth2.attachClickHandler( element, {}, (googleUser) => {
      //  asi se obtiene el profile de google completo
      // const profile = googleUser.getBasicProfile();
      const token = googleUser.getAuthResponse().id_token;
      //  asi solo el token
      // console.log(token);

      this._usuarioService.loginGoogle(token)
      .subscribe( () => {
        // console.log(resp);
        // this.router.navigate(['/dashboard']);
        window.location.href = '#/dashboard';
        // se hace para que cuando se carga la pagina se muestre y se recarge completo ya que es una redireccion
      });

    });
  }

  ingresar(forma: NgForm) {
    // revisar si el lformulario es valido
    if ( forma.invalid ) {
      return;
    }

    const usuario = new Usuario(null, forma.value.email, forma.value.password );
    // console.log(usuario);
    this._usuarioService.login(usuario, forma.value.recuerdame)
    .subscribe( correcto => this.router.navigate(['/dashboard']));

    // console.log(forma.valid);
    // console.log(forma.value);
    // this.router.navigate(['/dashboard']);
  }
}
