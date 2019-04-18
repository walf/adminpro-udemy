import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.models';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';

// import 'rxjs/add/operator/map';

// sweeetalert
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
      console.log('Servicio listo para usar');
      this.cargarStorage();
  }

  cargarStorage() {
    if ( localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  estaLogueado() {
    return (this.token.length > 5) ? true : false;
  }

  guardarStorage( id: string, token: string, usuario: Usuario ) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
    this.token = token;

  }

  logout() {
    this.usuario = null;
    this.token = '';

    // para remover todos los datos guardados en local stogare se usa
    // localStorage.clear();
    // no se va a usar

    // asi se borra el dato especifico

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);


  }

  loginGoogle(token: string) {
    const url = URL_SERVICIOS + '/login/google';
    return this.http.post( url, { token }  ).pipe(
      map( (resp: any) => {
        this.guardarStorage( resp.id, resp.token, resp.usuario );
        return true;
      })
    );

  }

  login( usuario: Usuario, recordar: boolean = false ) {

    // si el suario quiere que recuerde el email o no
    // se almacena o se borra del local storage
    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }
    const url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario).pipe(
      map( (resp: any) => {
        // localStorage.setItem('id', resp.id);
        // localStorage.setItem('token', resp.token);
        // localStorage.setItem('usuario', JSON.stringify(resp.usuario));
        this.guardarStorage( resp.id, resp.token, resp.usuario );
        return true;
      })
    );
  }

  crearUsuario(usuario: Usuario) {
    const url = URL_SERVICIOS + '/usuario';
    return this.http.post( url, usuario )
    .pipe(
      map( (resp: any) => {
        Swal.fire(
          'Usuario Creado',
          usuario.email,
          'success'
        );
        return resp.usuario;
      })
    );
  }
}
