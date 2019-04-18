import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor( public _usuarioService: UsuarioService ) { }

  ngOnInit() {
  }

}
