import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearDisplay } from './year-display';

describe('YearDisplay', () => {
  let component: YearDisplay;
  let fixture: ComponentFixture<YearDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
