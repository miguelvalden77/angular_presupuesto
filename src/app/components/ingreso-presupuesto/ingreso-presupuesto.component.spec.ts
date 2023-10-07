import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoPresupuestoComponent } from './ingreso-presupuesto.component';

describe('IngresoPresupuestoComponent', () => {
  let component: IngresoPresupuestoComponent;
  let fixture: ComponentFixture<IngresoPresupuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoPresupuestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
