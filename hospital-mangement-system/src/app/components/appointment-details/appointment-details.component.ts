import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/_services/appointment.service';
import { UserAuthService } from 'src/app/_services/user-auth.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {

  appointments:Appointment[];
  specialServices:any;
  names:any;
  constructor(private appointmentService:AppointmentService, 
    private userAuthService:UserAuthService,
    private router:Router
    ) { 
    // initalize attribute
    this.appointments=[];
  }

  ngOnInit(): void {
    //this.students=this.studentService.getAllStudents().subscribe ();
  this.getAllAppointments();
  }
private getAllAppointments(){
this.appointmentService.getAllAppointments().subscribe(
  data=>{
    console.log(data);
    this.appointments=data;
    
    // medical center
   // this.specialServices=data[0].specialService;
   this.names=data[0].appointmentId;
  }
);
}

updateAppointment(id:number){
this.router.navigate(['update-appointment', id]);
}

appointmentDetails(id:number){
  this.router.navigate(['appointment-details', id]);
  }

deleteAppointment(id:number){
  this.appointmentService.deleteAppointment(id).subscribe(
    data=>{
      this.getAllAppointments();
    }
  )
  }

  currentRole:any=this.userAuthService.getRoles();
currentFirstName:any=this.userAuthService.getFirstName();
currentLastName:any=this.userAuthService.getLastName();

}
