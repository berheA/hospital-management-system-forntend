import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/_services/appointment.service';
import { UserAuthService } from 'src/app/_services/user-auth.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  currentFirstName:any;
  currentLastName:any;
  currentEmail:any;
  currentUserId:any;
  
  appointment:Appointment;
  //specialServices:any;
  constructor(private appointmentService:AppointmentService,
    private userAuthService:UserAuthService,
    private router:Router) { 
     
      this.currentFirstName=this.userAuthService.getFirstName();
      this.currentLastName=this.userAuthService.getLastName();
      this.currentEmail=this.userAuthService.getEmail();
      this.currentUserId=this.userAuthService.getUserId();
      this.appointment=new Appointment(0, "","","")

  }

  ngOnInit(): void {
    //this.onSubmit();
    this.getAllAppointments();
  }
  
  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
      console.log(data);
      this.goToAppointmentList();
    }, error=>console.log(error));
  }

  goToAppointmentList(){
this.router.navigate(['/appointments']);
  }
 onSubmit(){

  console.log(this.appointment);
  this.saveAppointment();
  //this.getAllMedicalCenters()

 }

// it shouldbe all services
 private getAllAppointments(){
  this.appointmentService.getAllAppointments().subscribe(
    data=>{
      console.log(data);
      //this.appointment=data;
      
      //this.specialServices=data[0].specialService;
      //console.log("service list"+ this.specialServices[0]);
    }
  );
  }

}
