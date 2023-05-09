import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VecinosRoutingModule } from './vecinos-routing.module';
import { SecretarioComponent } from './organigrama/secretario/secretario.component';
import { VecinosComponent } from './organigrama/vecinos/vecinos.component';
import { EnCursoComponent } from './obras/en-curso/en-curso.component';
import { FinalizadasComponent } from './obras/finalizadas/finalizadas.component';
import { PresupuestosComponent } from './obras/presupuestos/presupuestos.component';
import { PresencialesComponent } from './reuniones/presenciales/presenciales.component';
import { NoPresencialesComponent } from './reuniones/no-presenciales/no-presenciales.component';
import { AvisosComponent } from './avisos/avisos.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { PrimengModule } from '../common/primeng/primeng.module';
import { PresidenteComponent } from './organigrama/presidente/presidente.component';

@NgModule({
  declarations: [
    SecretarioComponent,
    VecinosComponent,
    EnCursoComponent,
    FinalizadasComponent,
    PresupuestosComponent,
    PresencialesComponent,
    NoPresencialesComponent,
    AvisosComponent,
    CuentasComponent,
    PresidenteComponent
  ],
  imports: [
    CommonModule,
    VecinosRoutingModule,
    PrimengModule
  ]
})
export class VecinosModule { }
