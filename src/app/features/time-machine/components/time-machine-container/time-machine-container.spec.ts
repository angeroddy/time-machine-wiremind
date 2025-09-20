import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeMachineContainer } from './time-machine-container';

describe('TimeMachineContainer', () => {
  let component: TimeMachineContainer;
  let fixture: ComponentFixture<TimeMachineContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeMachineContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeMachineContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
