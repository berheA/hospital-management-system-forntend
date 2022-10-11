import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalCenter } from 'src/app/models/medicalCenter';
import { MedicalCenterService } from 'src/app/_services/medical-center-service.service';

@Component({
  selector: 'app-update-medical-center',
  templateUrl: './update-medical-center.component.html',
  styleUrls: ['./update-medical-center.component.css']
})
export class UpdateMedicalCenterComponent implements OnInit {

    id:number;
    medicalCenter:MedicalCenter= new MedicalCenter(0, "",0,"","","","",0,"");
  
    constructor(private medicalCenterService:MedicalCenterService,
      private route:ActivatedRoute,
      private router:Router
      ) {
        this.id=0;
       }
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.medicalCenterService.getMedicalCenterById(this.id).subscribe(
        data=> this.medicalCenter=data
      );
    }
  onSubmit(){
    this.medicalCenterService.updateMedicalCenter(this.id, this.medicalCenter).subscribe(
      data=>{
        this.goToMedicalCenterList();
      }, error=>console.log(error)
    );
  }
  
  goToMedicalCenterList(){
    this.router.navigate(['/medicalCenters']);
      }
  }
