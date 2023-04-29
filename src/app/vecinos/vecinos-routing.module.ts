import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../common/error404/error404.component';
import { PresidenteComponent } from './organigrama/presidente/presidente.component';
import { SecretarioComponent } from './organigrama/secretario/secretario.component';
import { VecinosComponent } from './organigrama/vecinos/vecinos.component';
import { EnCursoComponent } from './obras/en-curso/en-curso.component';
import { FinalizadasComponent } from './obras/finalizadas/finalizadas.component';
import { PresupuestosComponent } from './obras/presupuestos/presupuestos.component';
import { PresencialesComponent } from './reuniones/presenciales/presenciales.component';
import { NoPresencialesComponent } from './reuniones/no-presenciales/no-presenciales.component';
import { AvisosComponent } from './avisos/avisos.component';
import { CuentasComponent } from './cuentas/cuentas.component';

const routes: Routes = [
  {
    path: 'organigrama',
    children: [
      {
        path: 'presidente',
        component: PresidenteComponent
      },{
        path: 'secretario',
        component: SecretarioComponent
      },{
        path: 'vecinos',
        component: VecinosComponent
      }
    ]
  },{
    path: 'obras',
    children: [
      {
        path: 'en_curso',
        component: EnCursoComponent
      },{
        path: 'finalizadas',
        component: FinalizadasComponent
      },{
        path: 'presupuestos',
        component: PresupuestosComponent
      }
    ]
  },{
    path: 'reuniones',
    children: [
      {
        path: 'presenciales',
        component: PresencialesComponent
      },{
        path: 'no_presenciales',
        component: NoPresencialesComponent
      }
    ]
  },{
  path: 'avisos',
  component: AvisosComponent
},{
  path: 'cuentas',
  component: CuentasComponent
},{
  path:'**',
  component: Error404Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VecinosRoutingModule { }
