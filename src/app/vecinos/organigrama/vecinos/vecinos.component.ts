import { Component, OnInit } from '@angular/core';
import { VecinosService } from '../../vecinos.service';

@Component({
  selector: 'app-vecinos',
  templateUrl: './vecinos.component.html',
  styleUrls: ['./vecinos.component.css']
})
export class VecinosComponent implements OnInit {
  public vecinos: { nombre: any; telefono: any; imagen: any; }[] = [];

  constructor(private service: VecinosService) {}

  async ngOnInit() {
    this.vecinos = await this.service.getVecinos();
  }

}
