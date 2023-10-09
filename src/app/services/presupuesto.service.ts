import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  presupuesto: number
  restante: number
  private gasto$ = new Subject<any>()

  constructor() {
    this.presupuesto = 0
    this.restante = 0
  }

  newGasto(gasto: any) {
    this.restante = this.restante - gasto.cantidad
    console.log(this.restante)
    this.gasto$.next(gasto)
  }

  getGasto(): Observable<any> {
    return this.gasto$.asObservable()
  }

}
