import { Injectable, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LogupComponent } from '../common/logup/logup.component';
import { Usuario } from '../common/interfaces/usuario.interface';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class VecinosService {
  public logueado: boolean = false;
  public sidebarVisible: boolean = false;

  private ref: DynamicDialogRef | undefined;
  private users: Usuario[] = [];

  constructor(
    public dialogService: DialogService,
    private messageService: MessageService
  ) {
    //Todo recuperar usuarios de la base de datos
    this.users = [
      { name: 'a', email: 'a', password: 'a', notificaciones: true },
    ];
  }

  getIngresosMensuales() {
    // Todo recuperar obras de la base de datos
    return [
      30,
      30,
      30,
      30
    ];
  }

  getIngresos() {
    // Todo recuperar obras de la base de datos
    return [
      { nombre: 'Pago comunidad', precio: 30 },
      { nombre: 'Pago comunidad', precio: 30 },
      { nombre: 'Pago comunidad', precio: 30 },
      { nombre: 'Pago comunidad', precio: 30 }
    ];
  }

  getGastosMensuales() {
    // Todo recuperar obras de la base de datos
    return [
      0,
      200,
      0,
      200
    ];
  }

  getGastos() {
    // Todo recuperar obras de la base de datos
    return [
      { nombre: 'Cambio contadores', precio: 200 },
      { nombre: 'Reparación escalera rota', precio: 200 },
    ];
  }

  getObrasPresupuestadas() {
    // Todo recuperar obras de la base de datos
    return [
      {
        nombre: 'Ascensor',
        precio: 20000,
        imagen: 'assets/no_image.jpg',
        descripcion: 'Instalación del ascensor.',
      },
      {
        nombre: 'Ascensor',
        precio: 25000,
        imagen: 'assets/no_image.jpg',
        descripcion: 'Instalación del ascensor.',
      },
      {
        nombre: 'Ascensor',
        precio: 30000,
        imagen: 'assets/no_image.jpg',
        descripcion: 'Instalación del ascensor.',
      },
    ];
  }

  getObrasFinalizadas() {
    // Todo recuperar obras de la base de datos
    return [
      {
        nombre: 'Cambio contadores',
        precio: 200,
        imagen: 'assets/no_image.jpg',
        descripcion: 'Cambio de los contadores de la luz.',
      },
      {
        nombre: 'Reparación escalera rota',
        precio: 200,
        imagen: 'assets/no_image.jpg',
        descripcion: 'Reparación de una de las escaleras.',
      },
    ];
  }

  getObrasEnCurso() {
    // Todo recuperar obras de la base de datos
    return [
      {
        nombre: 'Chapa lateral',
        precio: 200,
        imagen: 'assets/no_image.jpg',
        descripcion:
          'Reparación de una de las chapas latrales que se rompió un día de tormenta.',
      },
      {
        nombre: 'Cableado general',
        precio: 100,
        imagen: 'assets/no_image.jpg',
        descripcion:
          'Cambio del cableado wifi de la sala de cables y ordenación de los mismos.',
      },
    ];
  }

  getVecinos() {
    // Todo recuperar vecinos de la base de datos
    return [
      {
        nombre: 'Diego López Trastoy',
        telefono: '658679811',
        imagen: 'assets/no_image.jpg',
      },
      {
        nombre: 'María del Carmen Trastoy Verez',
        telefono: '617725261',
        imagen: 'assets/no_image.jpg',
      },
      {
        nombre: 'Pepito Perez Pereira',
        telefono: '658679811',
        imagen: 'assets/no_image.jpg',
      },
    ];
  }

  getSecretario() {
    // Todo recuperar presidente de la base de datos
    return {
      nombre: 'María del Carmen Trastoy Verez',
      edad: 47,
      numTelefono: 617725261,
      imagen: 'assets/no_image.jpg',
      fechaNombramiento: '09/08/2023',
      promesas: [
        {
          header: 'Gastos',
          text: 'Prometo reducir los gastos de la comunidad al minimo.',
        },
        {
          header: 'Otro',
          text: 'Prometo reducir el precio de a comunidad.',
        },
      ],
    };
  }

  getPresidente() {
    // Todo recuperar presidente de la base de datos
    return {
      nombre: 'Pepito Perez Pereira',
      edad: 38,
      numTelefono: 658679811,
      imagen: 'assets/no_image.jpg',
      fechaNombramiento: '09/08/2023',
      promesas: [
        {
          header: 'Ascensor',
          text: 'Prometo dar fin a la incertidumbre acerca de las obras del ascensor.',
        },
        {
          header: 'Otro',
          text: 'Prometo solucionar cualquier problema que surja en menos de 24 horas.',
        },
      ],
    };
  }

  insertarUser(user: Usuario) {
    // Todo insertar usuario a la base de datos
    this.users.push(user);
  }

  mensaje(header: string, text: string = '', severity: string = 'info') {
    this.messageService.add({
      severity: severity,
      summary: header,
      detail: text,
    });
  }

  logupClose() {
    this.ref?.close();
  }

  logup() {
    this.ref = this.dialogService.open(LogupComponent, {
      header: 'Formulario de registro',
      width: '40%',
      style: { 'text-align': 'center' },
      data: { dialog: this.ref },
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  login(username: string, password: string) {
    for (let i = 0; i < this.users.length; i++) {
      if (username && username === this.users[i].name) {
        if (password && password === this.users[i].password) {
          this.logueado = true;
          break;
        }
      }
    }
    if (!this.logueado) {
      this.mensaje('Credenciales incorrectas');
    }
  }

  logout() {
    this.logueado = false;
  }
}
