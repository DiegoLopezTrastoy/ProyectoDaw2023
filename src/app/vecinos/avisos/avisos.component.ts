import { Component, OnInit } from '@angular/core';
import { VecinosService } from '../vecinos.service';
import { env } from 'src/env';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {

  public avisos: any[] = [];
  public visible: boolean = false;
  public urlBackendImage: string = `${env.BASE_URL}/image/`;
  public textArea: string = '';

  constructor(private servicio: VecinosService) {}
  
  async ngOnInit() {
    this.avisos = await this.servicio.getAvisos();
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
