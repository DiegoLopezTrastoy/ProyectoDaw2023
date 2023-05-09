import { Component, OnInit } from '@angular/core';
import { VecinosService } from '../vecinos.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css'],
})
export class CuentasComponent {
  public data: any;
  public options: any;
  public gastosEIngresos: any[];
  public ing: number[];
  public gas: number[];
  public saldo: number;
  public messages1: any[];

  constructor(private service: VecinosService) {
    this.gastosEIngresos = service.getGastosEIngresos();
    this.saldo = service.getSaldoActual();
    this.messages1 = [];
    let inggas: any[] = [];
    this.gastosEIngresos.forEach((element) => {
      this.messages1.push({
        severity: element.precio >= 0 ? 'success' : 'error',
        summary: element.precio + '€',
        detail: element.nombre,
      });
    });

    this.ing = service.getIngresosMensuales();
    this.gas = service.getGastosMensuales();

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      datasets: [
        {
          label: 'Ingresos',
          data: this.ing,
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
        },
        {
          label: 'Gastos',
          data: this.gas,
          fill: false,
          borderColor: documentStyle.getPropertyValue('--red-500'),
          tension: 0.4,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
}
