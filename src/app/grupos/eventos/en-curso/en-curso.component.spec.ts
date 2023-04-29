import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnCursoComponent } from './en-curso.component';

describe('EnCursoComponent', () => {
  let component: EnCursoComponent;
  let fixture: ComponentFixture<EnCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
