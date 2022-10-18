import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { MedicalCenter } from 'src/app/models/medicalCenter';
import { Patient } from 'src/app/models/patient';
import { MedicalCenterService } from 'src/app/_services/medical-center-service.service';
import { PatientService } from 'src/app/_services/patient.service';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  
 c=new Date();


  currentFirstName:any;
  currentLastName:any;
  currentEmail:any;
  currentUserId:any;
  patient:Patient;
  medicalCenter:any;
  appointment:any;

  medicalCenters:any=new MedicalCenter(0,"",0,"","", "", "", 0,"");
 
  private getAllMedicalCenters(){
    this.medicalCenterService.getAllMedicalCenters().subscribe(
      data=>{
        console.log(data);
        this.medicalCenters=data;
      }
    );
    }

  constructor(
    private patientService:PatientService,
    private userAuthService:UserAuthService,
    private medicalCenterService:MedicalCenterService,
    private router:Router,
    ) 
    
    
    { 
     
      this.currentFirstName=this.userAuthService.getFirstName();
      this.currentLastName=this.userAuthService.getLastName();
      this.currentEmail=this.userAuthService.getEmail();
      this.currentUserId=this.userAuthService.getUserId();

this.getAllMedicalCenters();

this.appointment=new Appointment(0,"","","");
      this.patient=new Patient(0, 
                     this.currentUserId, 0,
                      this.currentFirstName,
                       this.currentLastName,
                        this.currentEmail,
                      [this.appointment]
                        );

                        this.appointment=this.patient.appointment;

  }

  ngOnInit(): void {
    //this.onSubmit();
    this.getAllPatients();
  }
  
  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data=>{
      console.log( data);
      this.goToPatientList();
    }, error=>console.log(error));
  }

  goToPatientList(){
this.router.navigate(['/patients']);


  }
 onSubmit(){

  
  console.log( this.patient);
  this.savePatient();
  //this.getAllMedicalCenters()

 }

// it shouldbe all services
 private getAllPatients(){
  this.patientService.getAllPatients().subscribe(
    data=>{
      console.log(data);
      //this.patient=data;
      
      //this.specialServices=data[0].specialService;
      //console.log("service list"+ this.specialServices[0]);
    }
  );
  }
}
