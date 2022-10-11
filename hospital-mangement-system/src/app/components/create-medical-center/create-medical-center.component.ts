import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalCenter } from 'src/app/models/medicalCenter';
import { MedicalCenterService } from 'src/app/_services/medical-center-service.service';

@Component({
  selector: 'app-create-medical-center',
  templateUrl: './create-medical-center.component.html',
  styleUrls: ['./create-medical-center.component.css']
})
export class CreateMedicalCenterComponent implements OnInit {

  medicalCenter:MedicalCenter=new MedicalCenter(0, "",0,"","","","",0,[]);
  specialServices:any;
  constructor(private medicalCenterService:MedicalCenterService, private router:Router) { }

  ngOnInit(): void {
    //this.onSubmit();
    this.getAllMedicalCenters();
  }
  
  saveMedicalCenter(){
    this.medicalCenterService.createMedicalCenter(this.medicalCenter).subscribe(data=>{
      console.log(data);
      this.goToMedicalCenterList();
    }, error=>console.log(error));
  }

  goToMedicalCenterList(){
this.router.navigate(['/medicalCenters']);
  }
 onSubmit(){

  console.log(this.medicalCenter);
  this.saveMedicalCenter();
  //this.getAllMedicalCenters()

 }

// it shouldbe all services
 private getAllMedicalCenters(){
  this.medicalCenterService.getAllMedicalCenters().subscribe(
    data=>{
      console.log(data);
      //this.medicalCenters=data;
      
      //this.specialServices=data[0].specialService;
      //console.log("service list"+ this.specialServices[0]);
    }
  );
  }

}