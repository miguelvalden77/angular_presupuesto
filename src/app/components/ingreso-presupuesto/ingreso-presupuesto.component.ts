import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingreso-presupuesto',
  templateUrl: './ingreso-presupuesto.component.html',
  styleUrls: ['./ingreso-presupuesto.component.css']
})
export class IngresoPresupuestoComponent {

  cantidad: number = 0

  constructor(private _presupuestoService: PresupuestoService, private router: Router) { }

  agregar() {
    this._presupuestoService.presupuesto = this.cantidad
    this._presupuestoService.restante = this.cantidad
    this.router.navigate(["/gastos"])
  }
}
