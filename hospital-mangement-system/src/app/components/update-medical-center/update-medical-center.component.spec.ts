import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMedicalCenterComponent } from './update-medical-center.component';

describe('UpdateMedicalCenterComponent', () => {
  let component: UpdateMedicalCenterComponent;
  let fixture: ComponentFixture<UpdateMedicalCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMedicalCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMedicalCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
