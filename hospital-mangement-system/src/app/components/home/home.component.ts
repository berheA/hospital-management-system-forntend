import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  showcase($event:any){
    console.log("button clicked");
    if($event){
      console.log($event.target);
      console.log($event.value);
    }
  }
title:string;
  constructor() { 
    this.title="title property from home";
  }

  ngOnInit(): void {
    
  }

}
