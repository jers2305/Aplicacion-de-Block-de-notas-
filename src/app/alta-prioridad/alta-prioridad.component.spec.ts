import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPrioridadComponent } from './alta-prioridad.component';

describe('AltaPrioridadComponent', () => {
  let component: AltaPrioridadComponent;
  let fixture: ComponentFixture<AltaPrioridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaPrioridadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaPrioridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
