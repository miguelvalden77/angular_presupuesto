import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnDestroy, OnInit {

  presupuesto: number
  restante: number
  subscripcion: Subscription
  gastosList: any[] = []

  constructor(private _presupuestoService: PresupuestoService) {
    this.subscripcion = _presupuestoService.getGasto().subscribe(data => {
      console.log(data)
      this.restante -= data.cantidad
      this.gastosList.push(data)
    })

    this.presupuesto = 0
    this.restante = 0
  }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto
    this.restante = this._presupuestoService.restante
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe()
  }

}
