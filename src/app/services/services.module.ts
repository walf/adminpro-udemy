import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// se crea esto para poder llamar a servicios en este archivo y poder lalmar a todos los servicios
// mas facil desde el archivo app.module
// ademas se agrregan lso servicios en el providers de este archivo

import { SettingsService, SidebarService, SharedService } from './service.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService
  ]
})
export class ServicesModule { }
