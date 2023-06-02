<<<<<<< Updated upstream
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tipos } from './enum';
import { User } from './interfaces/User.interface';
import { environment } from '../../env';
import { Comunidad } from './interfaces/Comunidad.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private urlBase = environment.URL_BASE;

  constructor(private http: HttpClient) {}

  async getAllUser(): Promise<User[]> {
    console.log(await this.http.get<User[]>(this.urlBase + '/user').toPromise()||[]);
    
    return await this.http.get<User[]>(this.urlBase + '/user').toPromise()||[];
    
  }

  async getComunidades(): Promise<Comunidad[]> {
    return await this.http.get<Comunidad[]>(this.urlBase + '/comunidad').toPromise()||[];
=======
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

>>>>>>> Stashed changes
  }
}
