import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPresencialesComponent } from './no-presenciales.component';

describe('NoPresencialesComponent', () => {
  let component: NoPresencialesComponent;
  let fixture: ComponentFixture<NoPresencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPresencialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPresencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
