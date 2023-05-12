import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentasComponent } from './cuentas/cuentas.component';
import { EnCursoComponent } from './eventos/en-curso/en-curso.component';
import { FinalizadosComponent } from './eventos/finalizados/finalizados.component';
import { PotencialesComponent } from './eventos/potenciales/potenciales.component';
import { GruposRoutingModule } from './grupos-routing.module';
import { PrimengModule } from '../common/primeng/primeng.module';
import { AnfitrionComponent } from './organigrama/anfitrion/anfitrion.component';
import { InvitadosComponent } from './organigrama/invitados/invitados.component';



@NgModule({
  declarations: [
    EnCursoComponent,
    PotencialesComponent,
    FinalizadosComponent,
    CuentasComponent,
    AnfitrionComponent,
    InvitadosComponent
  ],
  imports: [
    CommonModule,
    GruposRoutingModule,
    PrimengModule
  ]
})
export class GruposModule { }
