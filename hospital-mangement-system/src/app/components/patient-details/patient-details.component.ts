import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/_services/patient.service';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patients:Patient[];
  appointments:any;
  constructor(private patientService:PatientService, 
    private userAuthService:UserAuthService,
    public userService:UserService,
    private router:Router
    ) { 
    // initalize attribute
    this.patients=[];
  }

  ngOnInit(): void {
    //this.students=this.studentService.getAllStudents().subscribe ();
  this.getAllPatients();
  }
private getAllPatients(){
this.patientService.getAllPatients().subscribe(
  data=>{
    console.log("data");
    console.log(data);
    this.patients=data;
    
    // medical center
  
    // this.appointments=data[0].appointment;
    //console.log(this.appointments);
  }
);
}

updatePatient(id:number){
this.router.navigate(['update-patient', id]);
}

assignPatient(id:number){
  this.router.navigate(['assign-patient', id]);
}

patientDetails(id:number){
  this.router.navigate(['patient-details', id]);
  }

deletePatient(id:number){
  this.patientService.deletePatient(id).subscribe(
    data=>{
      this.getAllPatients();
    }
  )
  }

  currentRole:any=this.userAuthService.getRoles();
currentFirstName:any=this.userAuthService.getFirstName();
currentLastName:any=this.userAuthService.getLastName();

}
