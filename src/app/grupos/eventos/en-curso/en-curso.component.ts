import { Component } from '@angular/core';
import { GruposService } from '../../grupos.service';

@Component({
  selector: 'app-en-curso',
  templateUrl: './en-curso.component.html',
  styleUrls: ['./en-curso.component.css']
})
export class EnCursoComponent {
  public eventos: any;

  constructor(private service: GruposService) {
    this.eventos = service.getEventosEnCurso();
  }
}



