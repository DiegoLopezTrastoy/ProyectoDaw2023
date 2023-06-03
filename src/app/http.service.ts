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
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  
  async getIngresosByComuniti(comunidad: Comunidad): Promise<Ingreso> {
    const criteria = {"comunidad": {"id": comunidad.id}}
    return await this.http.post<Ingreso>(`${env.BASE_URL}/ingreso/by-comunidad`, criteria).toPromise() || {}
  }

  async getGastosByComuniti(comunidad: Comunidad): Promise<Gasto> {
    const criteria = {"comunidad": {"id": comunidad.id}}
    return await this.http.post<Gasto>(`${env.BASE_URL}/gasto/by-comunidad`, criteria).toPromise() || {}
  }

  async getAllAvisos(): Promise<Aviso[]> {
    return await this.http.get<Aviso[]>(`${env.BASE_URL}/aviso`).toPromise() || [];
  }

  async getAvisosByComuniti(comunidad: Comunidad): Promise<Aviso> {
    const criteria = {"comunidad": {"id": comunidad.id}}
    return await this.http.post<Aviso>(`${env.BASE_URL}/aviso/by-comunidad`, criteria).toPromise() || {}
  }

  async getComunidadByUser(user: User): Promise<Comunidad[]> {
    const criteria = {"vecinos": {"id": user.id}}
    return await this.http.post<Comunidad[]>(`${env.BASE_URL}/comunidad/by-user`, criteria).toPromise() || []
  }
  
  async getAllUsers(): Promise<User[]> {
    return await this.http.get<User[]>(`${env.BASE_URL}/user`).toPromise() || [];
  }

  async createVecino(vecino: Vecino): Promise<Vecino | undefined> {
    return await this.http.post<User>(`${env.BASE_URL}/vecino`, vecino).toPromise();
  }

  async createUser(user: User): Promise<User | undefined> {
    return await this.http.post<User>(`${env.BASE_URL}/user`, user).toPromise();
  }

  async uploadImage(image: any): Promise<File | undefined> {
    const formData = new FormData();
    formData.append('file', image);
    return await this.http.post<File>(`${env.BASE_URL}/image/upload`, formData).toPromise();
  }

  async getAllComunities(): Promise<Comunidad[]> {
    return await this.http.get<Comunidad[]>(`${env.BASE_URL}/comunidad`).toPromise() || [];
  }
}
