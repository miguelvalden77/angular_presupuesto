import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoPresupuestoComponent } from './components/ingreso-presupuesto/ingreso-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [
  { path: "", redirectTo: "/ingresarPresupuesto", pathMatch: "full" },
  { path: "ingresarPresupuesto", component: IngresoPresupuestoComponent },
  { path: "gastos", component: GastosComponent },
  { path: "**", redirectTo: "/ingresarPresupuesto" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
