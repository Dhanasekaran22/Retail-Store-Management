import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillAutomationComponent } from './bill-automation.component';

describe('BillAutomationComponent', () => {
  let component: BillAutomationComponent;
  let fixture: ComponentFixture<BillAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillAutomationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
