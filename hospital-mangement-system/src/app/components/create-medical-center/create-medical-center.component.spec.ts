import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedicalCenterComponent } from './create-medical-center.component';

describe('CreateMedicalCenterComponent', () => {
  let component: CreateMedicalCenterComponent;
  let fixture: ComponentFixture<CreateMedicalCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMedicalCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMedicalCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
