import { ChangeDetectorRef, Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VecinosService {

  public logueado:boolean = false;

  constructor() { }

  login(username: string, password: string) {
    if (username && username !== '') {
      if (password && password !== '') {
        this.logueado = true;
      }
    }
  }

  logout() {
    this.logueado = false;

  }
}
