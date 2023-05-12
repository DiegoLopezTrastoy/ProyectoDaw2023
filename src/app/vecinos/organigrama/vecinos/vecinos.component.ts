import { Component } from '@angular/core';
import { VecinosService } from '../../vecinos.service';

@Component({
  selector: 'app-vecinos',
  templateUrl: './vecinos.component.html',
  styleUrls: ['./vecinos.component.css']
})
export class VecinosComponent {
  public vecinos;

  constructor(private service: VecinosService) {
    this.vecinos = service.getVecinos();
  }

}
