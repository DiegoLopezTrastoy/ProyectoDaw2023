import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/auth.guard';
import { InicioComponent } from './inicio/inicio.component';
import { Error404Component } from './common/error404/error404.component';
import { LogupComponent } from './common/logup/logup.component';

const routes: Routes = [{
  path: '',
  component: InicioComponent
},{
  path: 'vecinos',
  loadChildren: () => import('./vecinos/vecinos.module').then(m => m.VecinosModule),
  canActivate: [AuthGuard], canActivateChild: [AuthGuard]
},{
  path: 'grupos',
  loadChildren: () => import('./grupos/grupos.module').then(m => m.GruposModule),
  canActivate: [AuthGuard], canActivateChild: [AuthGuard]
},{
  path:'**',
  component: Error404Component
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
