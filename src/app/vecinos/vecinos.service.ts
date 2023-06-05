import { ChangeDetectorRef, Injectable, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LogupComponent } from '../common/logup/logup.component';
import { MessageService } from 'primeng/api';
import { HttpService } from '../http.service';
import { User } from '../interfaces/User.interface';
import { Comunidad } from '../interfaces/Comunidad.interface';
import { Vecino } from '../interfaces/Vecino.interface';
import { Aviso } from '../interfaces/Aviso.interface';

@Injectable({
  providedIn: 'root',
})
export class VecinosService {
  public logueado: boolean = false;
  public sidebarVisible: boolean = false;

  private ref: DynamicDialogRef | undefined;
  private users: User[] = [];
  public usuarioLogueado: User = {};
  public comunidad: Comunidad = {};
  public blocked: boolean = false;

  constructor(
    public dialogService: DialogService,
    private messageService: MessageService,
    private http: HttpService
    ) {}

      getAllComuniti(): Promise<Comunidad[]> {
        return this.http.getAllComunities();
      }
      
      getAvisos(): Promise<Aviso[]> {
        // return this.http.getAvisosByComuniti(this.comunidad);
        console.log(this.comunidad);
        
        return this.http.getAvisosByComuniti(this.comunidad);
  }

  addAviso(aviso: Aviso) {
    //Todo insertar aviso en la base de tatos
  }

  getSaldoActual() {
    // Todo recuperar saldo acual de la base de datos
    return 9325;
  }

  getIngresosMensuales() {
    // Todo recuperar obras de la base de datos
    return [30, 30, 30, 30];
  }

  getGastosMensuales() {
    // Todo recuperar obras de la base de datos
    return [0, -200, 0, 200];
  }

  getGastosEIngresos() {
    // Todo recuperar obras de la base de datos
    return [
      { nombre: 'Pago comunidad', precio: 30 },
      { nombre: 'Cambio contadores', precio: -200 },
      { nombre: 'Pago comunidad', precio: 30 },
      { nombre: 'Reparación escalera rota', precio: -200 },
      { nombre: 'Pago comunidad', precio: 30 },
      { nombre: 'Pago comunidad', precio: 30 },
    ];
  }

  getObrasPresupuestadas() {
    // Todo recuperar obras de la base de datos
    return [
      {
        nombre: 'Ascensor',
        precio: 20000,
        imagen: 'no_image.jpg',
        descripcion: 'Instalación del ascensor.',
      },
      {
        nombre: 'Ascensor',
        precio: 25000,
        imagen: 'no_image.jpg',
        descripcion: 'Instalación del ascensor.',
      },
      {
        nombre: 'Ascensor',
        precio: 30000,
        imagen: 'no_image.jpg',
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
        imagen: 'no_image.jpg',
        descripcion: 'Cambio de los contadores de la luz.',
      },
      {
        nombre: 'Reparación escalera rota',
        precio: 200,
        imagen: 'no_image.jpg',
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
        imagen: 'no_image.jpg',
        descripcion:
          'Reparación de una de las chapas latrales que se rompió un día de tormenta.',
      },
      {
        nombre: 'Cableado general',
        precio: 100,
        imagen: 'no_image.jpg',
        descripcion:
          'Cambio del cableado wifi de la sala de cables y ordenación de los mismos.',
      },
    ];
  }

  getVecinos() {
    return this.http.getVecinos(this.comunidad);
  }

  getPresidente() {
    return this.http.getPresidente(this.comunidad);
  }

  async insertarUser(user: User, image: File, comunidad: Comunidad) {
    const image2: any = await this.http.uploadImage(image);
    user.imagen = image2!.file.originalname;
    this.http.createUser(user).then((user) => {
      this.logueado = true;
      this.usuarioLogueado = user || {};
    });
    this.users = await this.http.getAllUsers();
    this.ref?.close();
    this.http.createVecino({
      userid: this.usuarioLogueado.id,
      vivienda: comunidad.direccion,
    });
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

  async login(username: string, password: string) {
    this.blocked = true;
    this.users = await this.http.getAllUsers();
    for (let i = 0; i < this.users.length; i++) {
      if (username && username === this.users[i].nombre) {
        if (
          password &&
          (password === this.users[i].password!)
        ) {
          this.usuarioLogueado = this.users[i];
          this.logueado = true;
          this.usuarioLogueado = this.users[i];
          break;
        }
      }
    }
    if (!this.logueado) {
      this.mensaje('Credenciales incorrectas');
    }
    this.blocked = false;
  }

  logout() {
    this.logueado = false;
  }
}
