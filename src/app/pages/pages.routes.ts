import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { LoginGuardGuard } from '../services/service.index';

const pagesRoutes: Routes = [
    { path: '',
    component: PagesComponent,
    canActivate: [ LoginGuardGuard ],
    children: [
        // tslint:disable-next-line:max-line-length
        { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard', descripcion: 'Encuentra la información de las graficas' } },
        { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress', descripcion: 'Progress' }},
        { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas', descripcion: 'Gráficas' }},
        { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas', descripcion: 'Promesas' }},
        { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs', descripcion: 'RxJs' }},
        { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del Tema', descripcion: 'Ajustes' }},
        { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ] },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
