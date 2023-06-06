import { Component, OnInit } from '@angular/core';
import { VecinosService } from '../vecinos.service';
import { env } from 'src/env';
import { Message } from 'primeng/api';

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
  private imagen: any;

  constructor(private servicio: VecinosService) {}
  
  async ngOnInit() {
    this.avisos = await this.servicio.getAvisos();
  }

  async anadir() {
    this.visible = false;
    this.textArea = (document.querySelector('#input') as HTMLTextAreaElement).value;
    const imageName = this.imagen.name ? this.imagen.name : 'no_image.jpg';
    const aviso = { imagen: imageName, texto: this.textArea};
    this.servicio.addAviso(aviso, this.imagen, this.imagen.name ? true: false);
    this.avisos = await this.servicio.getAvisos();
  }

  onFileUpload(event: any) {
    this.imagen = event.files[0];
  }

  cancel() {
    this.visible = false;
  }

  mostrarForm() {
    this.visible = true;
  }

}
