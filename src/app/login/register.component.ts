import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupName } from '@angular/forms';

// para poder llamar archivos y funciones de javascrit que estan fuera del angular

declare function init_plugins();

// sweeetalert
import Swal from 'sweetalert2';

import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css' ]
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor( private _usuarioService: UsuarioService,
               public router: Router
    ) { }

  sonIguales( campo1: string, campo2: string) {
    return (group: FormGroup ) => {
      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }

      return {
        sonIguales: true
      };
    };
  }

  ngOnInit() {
    init_plugins();

    this.forma = new FormGroup({
      nombre: new FormControl( null, Validators.required ),
      correo: new FormControl( null, [Validators.required, Validators.email] ),
      password: new FormControl( null, Validators.required ),
      password2: new FormControl( null, Validators.required ),
      condiciones: new FormControl( false ),
    }, { validators: this.sonIguales( 'password', 'password2' ) } );

    // vamos a llenar lso campos con datos fijos para evitar estar escribiendo pero solo para este ejercicio

    this.forma.setValue({
      nombre: 'Test',
      correo: 'Test1@test.com',
      password: '123456',
      password2: '123456',
      condiciones: true
    });
  }

  registrarUsuario() {
    if ( this.forma.invalid ) {
      return;
    }
    if ( !this.forma.value.condiciones ) {
      // console.log('Debe aceptar las condiciones de uso');
      Swal.fire(
        'Importante',
        'Debe aceptar los terminos!',
        'warning'
      );
      return;
    }

    // console.log(this.forma.valid);
    // console.log(this.forma.value);

    // definir y cargar objeto datos a usuario

    const usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password,
    );

    // llamamos el servico y nos suscribimos
    this._usuarioService.crearUsuario(usuario)
    .subscribe( resp => {
      console.log(resp);
      this.router.navigate(['/login']);
    });
  }

}
