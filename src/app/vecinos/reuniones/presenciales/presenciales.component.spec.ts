import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresencialesComponent } from './presenciales.component';

describe('PresencialesComponent', () => {
  let component: PresencialesComponent;
  let fixture: ComponentFixture<PresencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresencialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
