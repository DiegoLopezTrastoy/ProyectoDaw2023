import { Component } from '@angular/core';
import { VecinosService } from '../../vecinos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent {
  public presupuestos;

  constructor(private service: VecinosService) {
    this.presupuestos = service.getObrasPresupuestadas();
  }
}
