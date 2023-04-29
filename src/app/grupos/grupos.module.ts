import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentasComponent } from './cuentas/cuentas.component';
import { EnCursoComponent } from './eventos/en-curso/en-curso.component';
import { FinalizadosComponent } from './eventos/finalizados/finalizados.component';
import { PotencialesComponent } from './eventos/potenciales/potenciales.component';
import { AnfitrionComponent } from './organigrama/anfitrion/anfitrion.component';
import { InvitadosComponent } from './organigrama/invitados/invitados.component';
import { GruposRoutingModule } from './grupos-routing.module';



@NgModule({
  declarations: [
    AnfitrionComponent,
    InvitadosComponent,
    EnCursoComponent,
    PotencialesComponent,
    FinalizadosComponent,
    CuentasComponent
  ],
  imports: [
    CommonModule,
    GruposRoutingModule
  ]
})
export class GruposModule { }
