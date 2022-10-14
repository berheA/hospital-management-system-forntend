import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalCenter } from 'src/app/models/medicalCenter';
import { MedicalCenterService } from 'src/app/_services/medical-center-service.service';

@Component({
  selector: 'app-medical-center-details',
  templateUrl: './medical-center-details.component.html',
  styleUrls: ['./medical-center-details.component.css']
})
export class MedicalCenterDetailsComponent implements OnInit {

  medicalCenters:MedicalCenter[];
  constructor(private medicalCenterService:MedicalCenterService, 
    private router:Router
    ) { 
    // initalize attribute
    this.medicalCenters=[];
  }

  ngOnInit(): void {
  this.getAllMedicalCenters();
  }
private getAllMedicalCenters(){
this.medicalCenterService.getAllMedicalCenters().subscribe(
  data=>{
    console.log(data);
    this.medicalCenters=data;
  }
);
}

updateMedicalCenter(id:number){
this.router.navigate(['update-medicalCenter', id]);
}

medicalCenterDetails(id:number){
  this.router.navigate(['medicalCenter-details', id]);
  }

deleteMedicalCenter(id:number){
  this.medicalCenterService.deleteMedicalCenter(id).subscribe(
    data=>{
      this.getAllMedicalCenters();
    }
  )
  }
}

