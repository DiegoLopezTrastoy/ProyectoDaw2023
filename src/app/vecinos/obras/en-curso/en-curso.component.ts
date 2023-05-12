import { Component } from '@angular/core';
import { VecinosService } from '../../vecinos.service';

@Component({
  selector: 'app-en-curso',
  templateUrl: './en-curso.component.html',
  styleUrls: ['./en-curso.component.css']
})
export class EnCursoComponent {
  public obras;

  constructor(private service: VecinosService) {
    this.obras = service.getObrasEnCurso();
  }

}
