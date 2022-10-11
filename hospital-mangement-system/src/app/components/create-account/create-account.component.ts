import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  account:Account=new Account("","","","","User");
  constructor(private accountService:AccountServiceService,
    private userService:UserService,
    private router:Router ) { }

  ngOnInit(): void {
  }

///


saveAccount(){
  this.accountService.createAccount(this.account).subscribe(data=>{
    console.log(data);
   // this.goToLogin();
  }
  , (error)=>{
    if(error.status==200 || error.status==201){
      alert("Created");
      this.goToLogin();
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

goToLogin(){
this.router.navigate(['/login']);
}
onCreateAccount(){

console.log(this.account);
this.saveAccount();

}



  //



  public displayRoleForAdmin(){
    return this.userService.roleMatch(['Admin']);
  }
}
