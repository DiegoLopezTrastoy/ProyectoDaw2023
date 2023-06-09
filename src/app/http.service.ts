import { Injectable } from '@angular/core';
import { User } from './interfaces/User.interface';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/env';
import { Vecino } from './interfaces/Vecino.interface';
import { Comunidad } from './interfaces/Comunidad.interface';
import { Aviso } from './interfaces/Aviso.interface';
import { Gasto } from './interfaces/Gasto.interface';
import { Ingreso } from './interfaces/Ingreso.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  async getVecinos(comunidad: Comunidad) {
    const criteria = { comunidad: { id: Number(comunidad.id) } };
    const vecinos: any[] =
      (await this.http
        .post<any[]>(`${env.BASE_URL}/vecino/by-comunidad`, criteria)
        .toPromise()) || [];
    let array: { nombre: any; telefono: any; imagen: any }[] = [];
    vecinos.forEach((vecino) => {
      array.push({
        nombre: vecino.user.nombre,
        telefono: vecino.user.num_telefono,
        imagen: vecino.user.imagen,
      });
    });
    return array;
  }

  async getSecretario(comunidad: Comunidad) {
    const criteria = { comunidades: { id: comunidad.id } };
    const secretario: any = ((await this.http
      .post<any[]>(`${env.BASE_URL}/secretario/by-comunidad`, criteria)
      .toPromise()) || [])[0];
    const date = new Date();
    const edad =
      date.getFullYear() -
      secretario.user.fecha_nacimiento.slice(
        secretario.user.fecha_nacimiento.lastIndexOf('/') + 1
      );
    return {
      imagen: secretario.user.imagen,
      nombre: secretario.user.nombre,
      edad,
      numTelefono: secretario.user.num_telefono,
      fechaNombramiento: secretario.fechaInicio,
      fechaFin: secretario.fechaFin,
    };
  }

  async getPresidente(comunidad: Comunidad) {
    const criteria = { comunidades: { id: comunidad.id } };
    const presidente: any = ((await this.http
      .post<any[]>(`${env.BASE_URL}/presidente/by-comunidad`, criteria)
      .toPromise()) || [])[0];
    const date = new Date();
    const edad =
      date.getFullYear() -
      presidente.user.fecha_nacimiento.slice(
        presidente.user.fecha_nacimiento.lastIndexOf('/') + 1
      );
    return {
      imagen: presidente.user.imagen,
      nombre: presidente.user.nombre,
      edad,
      numTelefono: presidente.user.num_telefono,
      fechaNombramiento: presidente.fechaInicio,
      fechaFin: presidente.fechaFin,
    };
  }

  constructor(private http: HttpClient) {}

  async getIngresosByComuniti(comunidad: Comunidad): Promise<Ingreso[]> {
    const criteria = { comunidad: { id: comunidad.id } };
    return (
      (await this.http
        .post<Ingreso[]>(`${env.BASE_URL}/ingreso/by-comunidad`, criteria)
        .toPromise()) || []
    );
  }

  async getGastosByComuniti(comunidad: Comunidad): Promise<Gasto[]> {
    const criteria = { comunidad: { id: comunidad.id } };
    return (
      (await this.http
        .post<Gasto[]>(`${env.BASE_URL}/gasto/by-comunidad`, criteria)
        .toPromise()) || []
    );
  }

  async getAllAvisos(): Promise<Aviso[]> {
    return (
      (await this.http.get<Aviso[]>(`${env.BASE_URL}/aviso`).toPromise()) || []
    );
  }

  async addAviso(aviso: Aviso, comunidad: Comunidad, image: File, uploadImage: boolean) {
    if (uploadImage) {
      aviso.imagen = (await this.uploadImage(image))?.file.originalname;
    } 
    return await this.http
      .post<User>(`${env.BASE_URL}/aviso`, {...aviso, comunidad: {id: comunidad.id}})
      .toPromise();
  }

  async getAvisosByComuniti(comunidad: Comunidad): Promise<Aviso[]> {
    const criteria = { comunidad: { id: comunidad.id } };
    return (
      (await this.http
        .post<Aviso[]>(`${env.BASE_URL}/aviso/by-comunidad`, criteria)
        .toPromise()) || []
    );
  }

  async getComunidadByUser(user: User): Promise<Comunidad[]> {
    const criteria = { vecinos: { id: user.id } };
    return (
      (await this.http
        .post<Comunidad[]>(`${env.BASE_URL}/comunidad/by-user`, criteria)
        .toPromise()) || []
    );
  }

  async getAllUsers(): Promise<User[]> {
    return (
      (await this.http.get<User[]>(`${env.BASE_URL}/user`).toPromise()) || []
    );
  }

  async createVecino(vecino: Vecino): Promise<Vecino | undefined> {
    return await this.http
      .post<User>(`${env.BASE_URL}/vecino`, vecino)
      .toPromise();
  }

  async createUser(user: User): Promise<User | undefined> {
    return await this.http.post<User>(`${env.BASE_URL}/user`, user).toPromise();
  }

  async uploadImage(image: any): Promise<any | undefined> {
    const formData = new FormData();
    formData.append('file', image);
    return await this.http
      .post<File>(`${env.BASE_URL}/image/upload`, formData)
      .toPromise();
  }

  async getAllComunities(): Promise<Comunidad[]> {
    return (
      (await this.http
        .get<Comunidad[]>(`${env.BASE_URL}/comunidad`)
        .toPromise()) || []
    );
  }
}
