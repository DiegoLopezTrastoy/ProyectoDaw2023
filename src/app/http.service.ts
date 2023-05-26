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
  }
}
