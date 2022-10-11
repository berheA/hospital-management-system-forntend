import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/_services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  id:number;
  patient:Patient= new Patient(0, 0,0, "","","",[]);
  appt:any;

  constructor(private patientService:PatientService,
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
      }
      
    );
  }
onSubmit(){
  this.patientService.updatePatient(this.id, this.patient).subscribe(
    data=>{
      this.goToPatientList();
    }, error=>console.log(error)
  );
}

goToPatientList(){
  this.router.navigate(['/patients']);
    }

}
