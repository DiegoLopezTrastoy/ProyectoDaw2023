import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VecinosService } from '../vecinos/vecinos.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private service: VecinosService
  ) {}

  validar () {
    // if (!this.service.logueado) {
    //   this.service.mensaje('Permiso denegado', 'No tiene permiso para acceder a la ruta, inicie sesion para obtener el permiso.', 'error');
    // } else {
    //   this.service.sidebarVisible = false;
    // }
    // return this.service.logueado;
    return true;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.validar();
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.validar();
  }
}
