import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Treatment } from 'src/app/models/treatment';
import { TreatmentService } from 'src/app/_services/treatment.service';

@Component({
  selector: 'app-update-treatment',
  templateUrl: './update-treatment.component.html',
  styleUrls: ['./update-treatment.component.css']
})
export class UpdateTreatmentComponent implements OnInit {

  id:number;
  treatment:Treatment= new Treatment(0, "",0,"","","","","");

  constructor(private treatmentService:TreatmentService,
    private route:ActivatedRoute,
    private router:Router
    ) {
      this.id=0;
     }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.treatmentService.getTreatmentById(this.id).subscribe(
      data=> this.treatment=data
    );
  }
onSubmit(){
  this.treatmentService.updateTreatment(this.id, this.treatment).subscribe(
    data=>{
      this.goToTreatmentList();
    }, error=>console.log(error)
  );
}

goToTreatmentList(){
  this.router.navigate(['/treatments']);
    }

}
