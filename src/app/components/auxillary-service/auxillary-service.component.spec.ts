import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxillaryServiceComponent } from './auxillary-service.component';

describe('AuxillaryServiceComponent', () => {
  let component: AuxillaryServiceComponent;
  let fixture: ComponentFixture<AuxillaryServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuxillaryServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuxillaryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
