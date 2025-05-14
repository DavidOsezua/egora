import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketRiskComponent } from './market-risk.component';

describe('MarketRiskComponent', () => {
  let component: MarketRiskComponent;
  let fixture: ComponentFixture<MarketRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketRiskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
