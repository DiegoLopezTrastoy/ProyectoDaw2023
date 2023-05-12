import { Component } from '@angular/core';
import { VecinosService } from '../../vecinos.service';

@Component({
  selector: 'app-secretario',
  templateUrl: './secretario.component.html',
  styleUrls: ['./secretario.component.css']
})
export class SecretarioComponent {
  public secretario: any;

  constructor(private service: VecinosService) {
    this.secretario = service.getSecretario();
  }
}
