import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretarioComponent } from './secretario.component';

describe('SecretarioComponent', () => {
  let component: SecretarioComponent;
  let fixture: ComponentFixture<SecretarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
