import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetReservationComponent } from './trajet-reservation.component';

describe('TrajetReservationComponent', () => {
  let component: TrajetReservationComponent;
  let fixture: ComponentFixture<TrajetReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajetReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
