import { Component } from '@angular/core';

@Component({
  selector: 'app-no-presenciales',
  templateUrl: './no-presenciales.component.html',
  styleUrls: ['./no-presenciales.component.css'],
})
export class NoPresencialesComponent {
  public reuniones = [
    { fecha: '30/06/2023', temas: ['Ascensor', 'Escaleras', 'Baños'] },
  ];
}
