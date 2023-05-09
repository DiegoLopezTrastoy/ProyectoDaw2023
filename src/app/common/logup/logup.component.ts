import { Component } from '@angular/core';
import { VecinosService } from '../../vecinos/vecinos.service';
import { Usuario } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent {
  public name: string = '';
  public email: string = '';
  public password: string = '';
  public repeatPassword: string = '';
  public siLeido: boolean = false;
  public notificaciones: boolean = true;

  constructor(
    private service: VecinosService,
    ) {}

  registrarse() {
    if (this.name.length>0) {
      if (this.email.length>0) {
        if (this.password.length>0) {
          if (this.password === this.repeatPassword) {
            if (this.siLeido) {
              const user: Usuario = {email: this.email, name: this.name, notificaciones: this.notificaciones, password: this.password};
              this.service.insertarUser(user);
            }
          }
        }
      }
    }
  }

  cancelar() {
    this.service.logupClose();
  }
}
