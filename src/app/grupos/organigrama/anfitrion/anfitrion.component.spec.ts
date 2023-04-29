import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfitrionComponent } from './anfitrion.component';

describe('AnfitrionComponent', () => {
  let component: AnfitrionComponent;
  let fixture: ComponentFixture<AnfitrionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfitrionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnfitrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
