import { Component } from '@angular/core';
import { VecinosService } from '../../vecinos.service';

@Component({
  selector: 'app-finalizadas',
  templateUrl: './finalizadas.component.html',
  styleUrls: ['./finalizadas.component.css'],
})
export class FinalizadasComponent {
  public obras;

  constructor(private service: VecinosService) {
    this.obras = service.getObrasFinalizadas();
  }
}
