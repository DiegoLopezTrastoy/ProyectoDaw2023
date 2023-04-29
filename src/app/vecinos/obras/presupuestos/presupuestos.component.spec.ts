import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestosComponent } from './presupuestos.component';

describe('PresupuestosComponent', () => {
  let component: PresupuestosComponent;
  let fixture: ComponentFixture<PresupuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresupuestosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
