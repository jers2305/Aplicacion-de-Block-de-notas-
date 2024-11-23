import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPrioridadComponent } from './media-prioridad.component';

describe('MediaPrioridadComponent', () => {
  let component: MediaPrioridadComponent;
  let fixture: ComponentFixture<MediaPrioridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaPrioridadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaPrioridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
