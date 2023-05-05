import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VecinosService } from './vecinos/vecinos.service';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private service: VecinosService,
    private messageService: MessageService
  ) {}

  validar () {
    if (!this.service.logueado) {
      this.messageService.add({ severity: 'error', summary: 'Permiso denegado', detail: 'No tiene permiso para acceder a la ruta, inicie sesion para obtener el permiso.' });
    } else {
      this.service.sidebarVisible = false;
    }
    return this.service.logueado;
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
