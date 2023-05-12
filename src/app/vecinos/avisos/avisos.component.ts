import { Component } from '@angular/core';
import { VecinosService } from '../vecinos.service';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent {

  public avisos: any[];
  public visible: boolean = false;
  public urlBackendImage: string;
  public textArea: string = '';

  constructor(private servicio: VecinosService) {
    this.avisos = servicio.getAvisos();
    this.urlBackendImage = servicio.getUrlBackendImages();
  }

  anadir() {
    this.visible = false;
    const aviso = {imagen: 'assets/no_image.jpg', descripcion: this.textArea};
    this.avisos.push(aviso);
    this.servicio.addAviso(aviso);
  }

  cancel() {
    this.visible = false;
  }

  mostrarForm() {
    this.visible = true;
  }

}
