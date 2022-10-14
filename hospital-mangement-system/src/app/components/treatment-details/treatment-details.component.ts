import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Treatment } from 'src/app/models/treatment';
import { TreatmentService } from 'src/app/_services/treatment.service';

@Component({
  selector: 'app-treatment-details',
  templateUrl: './treatment-details.component.html',
  styleUrls: ['./treatment-details.component.css']
})
export class TreatmentDetailsComponent implements OnInit {

  treatments:Treatment[];
  constructor(private treatmentService:TreatmentService, 
    private router:Router
    ) { 
    // initalize attribute
    this.treatments=[];
  }

  ngOnInit(): void {
  this.getAllTreatments();
  }
private getAllTreatments(){
this.treatmentService.getAllTreatments().subscribe(
  data=>{
    console.log(data);
    this.treatments=data;
  }
);
}

updateTreatment(id:number){
this.router.navigate(['update-treatment', id]);
}

treatmentDetails(id:number){
  this.router.navigate(['treatment-details', id]);
  }

deleteTreatment(id:number){
  this.treatmentService.deleteTreatment(id).subscribe(
    data=>{
      this.getAllTreatments();
    }
  )
  }
}
