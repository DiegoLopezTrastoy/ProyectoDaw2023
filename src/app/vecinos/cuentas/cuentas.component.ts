import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { VecinosService } from '../vecinos.service';
import { Ingreso } from 'src/app/interfaces/Ingreso.interface';
import { Gasto } from 'src/app/interfaces/Gasto.interface';
import { Message, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css'],
})
export class CuentasComponent implements OnInit {
  public data: any;
  public options: any;
  public ingresos: Ingreso[] = [];
  public ingresosNum: Number[] = [];
  public ingresosStr: Message[] = [];
  public gastos: Gasto[] = [];
  public gastosNum: Number[] = [];
  public gastosStr: Message[] = [];
  public saldo: number = 0;
  public visible: boolean = false;

  constructor(private service: VecinosService) {}
  
  async ngOnInit() {
    await this.init();

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
          data: this.ingresosNum,
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
        },
        {
          label: 'Gastos',
          data: this.gastosNum,
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

  private init = async () => {
    this.saldo = this.service.getSaldoActual();
    this.ingresos = await this.service.getIngresosAnuales();
    this.gastos = await this.service.getGastosAnuales();
    this.ingresosNum = [];
    this.ingresos.forEach((val) => {
      this.ingresosNum.push(val.cantidad!);
      this.ingresosStr.push({closable: false, severity: 'success', summary: `${val.cantidad} ${val.descripcion}`, icon: PrimeIcons.PLUS})
    });
    this.gastosNum = [];
    this.gastos.forEach((val) => {
      this.gastosNum.push(val.cantidad!);
      this.gastosStr.push({closable: false, severity: 'error', summary: `${val.cantidad} ${val.descripcion}`, icon: PrimeIcons.MINUS})
    });
    this.visible = true;
  };
}
