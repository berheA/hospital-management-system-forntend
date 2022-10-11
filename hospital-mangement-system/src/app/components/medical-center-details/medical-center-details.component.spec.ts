import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCenterDetailsComponent } from './medical-center-details.component';

describe('MedicalCenterDetailsComponent', () => {
  let component: MedicalCenterDetailsComponent;
  let fixture: ComponentFixture<MedicalCenterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalCenterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalCenterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
