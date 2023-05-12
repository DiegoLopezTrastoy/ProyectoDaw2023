import { Component } from '@angular/core';
import { GruposService } from '../../grupos.service';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.css']
})
export class FinalizadosComponent {
  public eventos: any;

  constructor(private service: GruposService) {
    this.eventos = service.getEventosFinalizadas();
  }
}
