import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrajetComponent } from './new-trajet.component';

describe('NewTrajetComponent', () => {
  let component: NewTrajetComponent;
  let fixture: ComponentFixture<NewTrajetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrajetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
