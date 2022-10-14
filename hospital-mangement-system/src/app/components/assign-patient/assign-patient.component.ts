import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import {Account} from 'src/app/models/account'
import { PatientService } from 'src/app/_services/patient.service';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { TreatmentService } from 'src/app/_services/treatment.service';
import { Treatment } from 'src/app/models/treatment';

@Component({
  selector: 'app-assign-patient',
  templateUrl: './assign-patient.component.html',
  styleUrls: ['./assign-patient.component.css']
})
export class AssignPatientComponent implements OnInit {

  id:number;
  patient:Patient= new Patient(0, 0,0, "","","",[]);
  appt:any;
  
  users:any=new Account("","", "","", "");
  treatment:any;
  
  constructor(private patientService:PatientService,
    private accountService:AccountServiceService,
    private treatmentService:TreatmentService,
    private route:ActivatedRoute,
    private router:Router
    ) {
      this.id=0;
     }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(
      (data)=>{
        this.patient=data;
        this.appt=data.appointment;
        console.log(this.appt);

       this.treatment = new Treatment("",this.patient.patientId,"", this.patient.email,"","", "", "");
      }
      
    );

    this.getAllDoctors();
  }
onSubmit(){
  this.saveTreatment();
}

goToPatientList(){
  this.router.navigate(['/patients']);
    }


    private getAllDoctors(){
      this. accountService.getAllDoctors().subscribe(
        data=>{
          console.log(data);
          this.users=data;
        }
      );
      }

      saveTreatment(){
        this.treatmentService.createTreatment(this.treatment).subscribe(data=>{
          console.log(data);
         // this.goToLogin();
        }
        , (error)=>{
          if(error.status==200 || error.status==201){
            alert("Created");
           // this.goToLogin();
          }
          else{
            alert("error");
          }
         // console.log(error);
          //alert("check")
         // this.goToLogin();
        } 
        
        );
      }
}
