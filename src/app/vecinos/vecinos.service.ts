import { ChangeDetectorRef, Injectable, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LogupComponent } from '../common/logup/logup.component';
import { MessageService } from 'primeng/api';
import { HttpService } from '../http.service';
<<<<<<< Updated upstream
import { tipos } from '../enum';
import { User } from '../interfaces/User.interface';
=======
import { User } from '../interfaces/User.interface';
import * as bcrypt from 'bcryptjs';
import { Comunidad } from '../interfaces/Comunidad.interface';
import { Vecino } from '../interfaces/Vecino.interface';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root',
})
export class VecinosService {
  public logueado: boolean = false;
<<<<<<< Updated upstream
  public userLogueado: User | undefined;
  public sidebarVisible: boolean = false;

  private ref: DynamicDialogRef | undefined;
  private users: User[] = [];

  constructor(
    public dialogService: DialogService,
    private messageService: MessageService,
    private httpService: HttpService
  ) {}

  async inicializarUsers() {
    this.users = (await this.httpService.getAllUser()) || [];
  }

  getUrlBackendImages() {
    return '';
  }

  getAvisos(): any {
    //Todo recuperar avisos de la base de datos
    return [
      {
        imagen: 'assets/no_image.jpg',
        descripcion: 'Cable suelto en la sala de cables.',
      },
      {
        imagen: 'assets/no_image.jpg',
        descripcion: 'La luz del portal no enciende.',
=======
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
    ) {
      //Todo recuperar usuarios de la base de datos
      // this.users = [
        //   { name: 'a', email: 'a', password: 'a', notificaciones: true },
        // ];
      }

      getAllComuniti(): Promise<Comunidad[]> {
        return this.http.getAllComunities()
      }
      
      getAvisos(): any {
        //Todo recuperar avisos de la base de datos
        return [
          {
            imagen: 'assets/no_image.jpg',
            descripcion: 'Cable suelto en la sala de cables.',
          },
          {
            imagen: 'assets/no_image.jpg',
            descripcion: 'La luz del portal no enciende.',
>>>>>>> Stashed changes
      },
      {
        imagen: 'assets/no_image.jpg',
        descripcion: 'Cable roto en la sala de cables.',
      },
    ];
  }

  addAviso(aviso: any) {
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
      fechaFin: '09/08/2024'
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
      fechaFin: '09/08/2024'
    };
  }

<<<<<<< Updated upstream
  insertarUser(user: any) {
    // Todo insertar usuario a la base de datos
    this.users.push(user);
=======
  insertarUser(
    user: User,
    image: File,
    vivienda: string,
    comunidad: Comunidad
  ) {
    bcrypt.hash(user.password!, 10).then(async (hashedPassword: string) => {
      const image2: any = await this.http.uploadImage(image);
      user.imagen = image2!.file.originalname;
      user.password = hashedPassword;
      this.http.createUser(user).then((user) => {
        this.usuarioLogueado = user || {};
      });
      this.users = await this.http.getAllUsers();
      this.ref?.close();
    });
    this.http
      .createVecino({ userid: this.usuarioLogueado.id, vivienda })
      .then((vecino) => {
        this.http.enlazarVecinoComunidad(vecino!, comunidad);
      });
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    this.users = await this.httpService.getAllUser();

    for (let i = 0; i < this.users.length; i++) {
      if (username && username === this.users[i].nombre) {
        if (password && password === this.users[i].password) {
=======
    this.blocked = true;
    this.users = await this.http.getAllUsers();
    for (let i = 0; i < this.users.length; i++) {
      if (username && username === this.users[i].nombre) {
        if (
          password &&
          (await bcrypt.compare(password, this.users[i].password!))
        ) {
          this.usuarioLogueado = this.users[i];
>>>>>>> Stashed changes
          this.logueado = true;
          this.userLogueado = this.users[i];
          return true;
        }
      }
    }
<<<<<<< Updated upstream
    this.mensaje('Credenciales incorrectas');
    return false;
=======
    if (!this.logueado) {
      this.mensaje('Credenciales incorrectas');
    }
    this.blocked = false;
>>>>>>> Stashed changes
  }

  logout() {
    this.logueado = false;
  }

  async getComunidadesByUser() {
    const comunidades: Comunidad[] = await this.http.getAllComunities();
    comunidades.forEach((comunidad, i) => {});
  }
}
