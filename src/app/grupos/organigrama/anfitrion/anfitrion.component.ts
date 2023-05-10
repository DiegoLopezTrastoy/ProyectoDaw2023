import { Component } from '@angular/core';
import { GruposService } from '../../grupos.service';

@Component({
  selector: 'app-anfitrion',
  templateUrl: './anfitrion.component.html',
  styleUrls: ['./anfitrion.component.css']
})
export class AnfitrionComponent {
  public anfitrion: any;

  constructor(private service: GruposService) {
    this.anfitrion = service.getAnfitrion();
  }
}
