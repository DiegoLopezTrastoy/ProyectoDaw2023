import { Component } from '@angular/core';
import { GruposService } from '../../grupos.service';

@Component({
  selector: 'app-invitados',
  templateUrl: './invitados.component.html',
  styleUrls: ['./invitados.component.css']
})
export class InvitadosComponent {
  public invitados: any;

  constructor(private service: GruposService) {
    this.invitados = service.getInvitados();
  }

}
