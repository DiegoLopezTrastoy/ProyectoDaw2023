import { Component } from '@angular/core';
import { GruposService } from '../../grupos.service';

@Component({
  selector: 'app-potenciales',
  templateUrl: './potenciales.component.html',
  styleUrls: ['./potenciales.component.css']
})
export class PotencialesComponent {
  public eventos: any;

  constructor(private service: GruposService) {
    this.eventos = service.getEventosPotenciales();
  }
}
