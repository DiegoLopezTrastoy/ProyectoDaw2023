import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnfitrionComponent } from './organigrama/anfitrion/anfitrion.component';
import { InvitadosComponent } from './organigrama/invitados/invitados.component';
import { EnCursoComponent } from './eventos/en-curso/en-curso.component';
import { PotencialesComponent } from './eventos/potenciales/potenciales.component';
import { FinalizadosComponent } from './eventos/finalizados/finalizados.component';
import { CuentasComponent } from './cuentas/cuentas.component';

const routes: Routes = [{
  path: 'organigrama',
  children: [{
    path: 'anfitrion',
    component: AnfitrionComponent
  }, {
    path: 'invitados',
    component: InvitadosComponent
  }
  ]
}, {
  path: 'eventos',
  children: [{
    path: 'en_curso',
    component: EnCursoComponent
  }, {
    path: 'potenciales',
    component: PotencialesComponent
  }, {
    path: 'finalizados',
    component: FinalizadosComponent
  }
  ]
}, {
  path: 'cuentas',
  component: CuentasComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GruposRoutingModule { }
