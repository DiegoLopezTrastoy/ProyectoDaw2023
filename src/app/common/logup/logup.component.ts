import { Component, OnInit } from '@angular/core';
import { VecinosService } from '../../vecinos/vecinos.service';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/User.interface';
import { env } from 'src/env';
import { Comunidad } from 'src/app/interfaces/Comunidad.interface';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {
  public name: string = '';
  public email: string = '';
  public password: string = '';
  public repeatPassword: string = '';
  public siLeido: boolean = false;
  public numTel!: number;
  public image!: File;
  public urlIsImage: string = `${env.BASE_URL}/image/upload`;
  public comunidad: Comunidad = {};
  public comunidades: Comunidad[] = [];
  public vivienda: string = '';

  constructor(
    private service: VecinosService,
    private message: MessageService,
    private http: HttpService
    ) {}

  ngOnInit(): void {
    this.http.getAllComunities().then((comunidades: any)=>{this.comunidades = comunidades});
  }

  registrarse() {
    if (this.name.length>0) {
      if (this.numTel !== 0) {
        if (this.email.length>0) {
          if (this.password.length>0) {
            if (this.password === this.repeatPassword) {
              if (this.siLeido) {
                const user: User = {email: this.email, nombre: this.name, password: this.password};
                this.service.insertarUser(user, this.image, this.vivienda, this.comunidad);
              } else {
                this.message.add({
                  severity: 'error',
                  summary: 'Debes aceptar la politica de privacidad para poder registrarse.'
                });
              }
            } else {
              this.message.add({
                severity: 'error',
                summary: 'Las contraseñas deben coincidir.'
              });
            }
          } else {
            this.message.add({
              severity: 'error',
              summary: 'La contraseña es obligatoria.'
            });
          }
        } else {
          this.message.add({
            severity: 'error',
            summary: 'El email es obligatorio.'
          });
        }
      } else {
        this.message.add({
          severity: 'error',
          summary: 'El número de teléfono es obligatorio.'
        });
      }
    } else {
      this.message.add({
        severity: 'error',
        summary: 'El nombre es obligatorio.'
      });
    }
  }

  cancelar() {
    this.service.logupClose();
  }

  onFileUpload(event: any) {
    this.image = event.files[0];
  }
}
