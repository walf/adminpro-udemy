import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// se crea esto para poder llamar a servicios en este archivo y poder lalmar a todos los servicios
// mas facil desde el archivo app.module
// ademas se agrregan lso servicios en el providers de este archivo

import { SettingsService, SidebarService, SharedService, UsuarioService } from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuardGuard } from './guards/login-guard.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard
  ]
})
export class ServicesModule { }
