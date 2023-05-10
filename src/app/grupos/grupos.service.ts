import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GruposService {
  constructor() {}

  getInvitados(): any {
    throw new Error('Method not implemented.');
  }

  getAnfitrion(): any {
    throw new Error('Method not implemented.');
  }

  getEventosPotenciales(): any {
    throw new Error('Method not implemented.');
  }

  getEventosFinalizadas() {
    throw new Error('Method not implemented.');
  }

  getEventosEnCurso() {
    throw new Error('Method not implemented.');
  }

  getIngresosMensuales(): number[] {
    throw new Error('Method not implemented.');
  }

  getSaldoActual(): number {
    throw new Error('Method not implemented.');
  }

  getGastosEIngresos(): any[] {
    throw new Error('Method not implemented.');
  }
}
