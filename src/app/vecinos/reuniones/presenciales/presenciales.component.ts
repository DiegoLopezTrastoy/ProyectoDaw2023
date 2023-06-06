import { Component } from '@angular/core';

@Component({
  selector: 'app-presenciales',
  templateUrl: './presenciales.component.html',
  styleUrls: ['./presenciales.component.css'],
})
export class PresencialesComponent {
  public reuniones = [
    { fecha: '10/07/2023', temas: ['Pago final ascensor'] },
  ];
}
