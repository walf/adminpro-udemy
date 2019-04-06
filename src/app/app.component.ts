import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminpro';

// tslint:disable-next-line:max-line-length
// se pone en el constructor el SettingsService para cargar al iniciarl la aplicacion el tema cargado por defecto o seleccionado por el usuario

// tslint:disable-next-line:variable-name
  constructor( public _ajustes: SettingsService) {}

}
