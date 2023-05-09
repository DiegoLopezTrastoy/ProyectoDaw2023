import { Component } from '@angular/core';
import { VecinosService } from '../../vecinos.service';

@Component({
  selector: 'app-presidente',
  templateUrl: './presidente.component.html',
  styleUrls: ['./presidente.component.css'],
})
export class PresidenteComponent {
  public presidente: any;

  constructor(private service: VecinosService) {
    this.presidente = service.getPresidente();
  }
}
