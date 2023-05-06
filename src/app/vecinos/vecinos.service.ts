import { Injectable, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LogupComponent } from '../logup/logup.component';
import { Usuario } from '../common/interfaces/usuario.interface';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class VecinosService implements OnInit {

  public logueado:boolean = false;
  public sidebarVisible: boolean = false;
  
  private ref: DynamicDialogRef | undefined;
  private users: Usuario[] = [];

  constructor(
    public dialogService: DialogService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    //Todo recuperar usuarios de la base de datos
    this.users = [{name: 'a', email: 'a', password: 'a', notificaciones: true}]
  }

  insertarUser(user: Usuario) {
    // Todo insertar usuario a la base de datos
    this.users.push(user);
  }

  mensaje(header: string, text: string = '', severity: string = 'info') {
    this.messageService.add({ severity: severity, summary: header, detail: text});
  }

  logupClose() {
    this.ref?.close();
  }

  logup() {
    this.ref = this.dialogService.open(LogupComponent, {
      header: 'Formulario de registro',
      width: '40%',
      style: {'text-align': 'center'},
      data: {'dialog' : this.ref},
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000
  });
  }

  login(username: string, password: string) {
    let nombre: boolean = false;
    let contraseña: boolean = false;
    for (let i = 0; i < this.users.length; i++) {
      if (username && username === this.users[i].name) {
        if (password && password === this.users[i].password) {
          nombre = true;
          contraseña = true;
          this.logueado = true;
          break;
        } else {
          contraseña = false;
        }
      } else {
        nombre = false;
      }
    }
    if (nombre) {
      this.mensaje('Nombre de usuario invalido');
    }
    if (contraseña) {
      this.mensaje('Contraseña invalida')
    }
  }

  logout() {
    this.logueado = false;

  }
}
