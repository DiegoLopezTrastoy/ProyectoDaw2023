import { Injectable } from '@angular/core';
import { User } from './interfaces/User.interface';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/env';
import { Vecino } from './interfaces/Vecino.interface';
import { Comunidad } from './interfaces/Comunidad.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  
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

  async enlazarVecinoComunidad(vecino: Vecino, comunidad: Comunidad) {

  }
}
