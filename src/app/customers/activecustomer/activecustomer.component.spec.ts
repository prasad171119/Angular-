import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivecustomerComponent } from './activecustomer.component';

describe('ActivecustomerComponent', () => {
  let component: ActivecustomerComponent;
  let fixture: ComponentFixture<ActivecustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivecustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
