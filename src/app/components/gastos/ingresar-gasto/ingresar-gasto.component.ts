import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent {

  gasto: string = ""
  cantidad: number = 0

  constructor(private _presupuestoService: PresupuestoService) { }

  addGasto() {
    if (this.gasto.trim() == "" || this.cantidad <= 0 || this.cantidad > this._presupuestoService.presupuesto) return
    this._presupuestoService.newGasto(this.cantidad)
    console.log({ gasto: this.gasto, cantidad: this.cantidad, presupuesto: this._presupuestoService.presupuesto, restante: this._presupuestoService.restante })

    this.gasto = ""
    this.cantidad = 0
  }
}
