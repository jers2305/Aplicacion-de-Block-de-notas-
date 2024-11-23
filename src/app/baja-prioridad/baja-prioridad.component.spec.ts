import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaPrioridadComponent } from './baja-prioridad.component';

describe('BajaPrioridadComponent', () => {
  let component: BajaPrioridadComponent;
  let fixture: ComponentFixture<BajaPrioridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BajaPrioridadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajaPrioridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
