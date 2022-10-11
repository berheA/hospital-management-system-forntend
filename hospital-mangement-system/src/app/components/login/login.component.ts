import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../../_services/user-auth.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//  user:User=new User();
// username:string='';
// password:string='';
// message:any;

  constructor(
    private userService:UserService,
    private userAuthService:UserAuthService, 
    private router:Router,
    //private service:LoginuserService, 
   // private service2:RestAPIService, 
    ) { 
   
  }

  ngOnInit(): void {
  }


// userLogin(){
//  //console.log(this.user);
//  this.service.loginUser(this.user).subscribe(data=>{
//   alert("login sec");

//  }, error=>alert("sorrry incorrect"));
// }

// doLogin(){
//  let res= this.service2.login(this.username,this.password);
//  res.subscribe(data=>{
//   //console.log(data)
//   this.router.navigate(["/students"]);
//  })
// }

login(loginForm:NgForm){
  //console.log(loginForm.value);


  this.userService.login(loginForm.value).subscribe(
    (response:any)=>{ 

      this.userAuthService.setRoles(response.user.userRole);
      this.userAuthService.setToken(response.jwtToken);
      this.userAuthService.setFirstName(response.user.firstName);
      this.userAuthService.setLastName(response.user.lastName);
      this.userAuthService.setEmail(response.user.email),
      this.userAuthService.setUserId(response.user.id);
      console.log(" token from login" + this.userAuthService.getToken());
      console.log(" Role from login" + this.userAuthService.getRoles());
      const role=response.user.userRole;
      console.log(response);
      if(role==='Admin'){
          this.router.navigate(['/admin']);
      }
      else{
        this.router.navigate(['/user']);
      }
    },
    (error)=>{console.log(error);
     }
  );
}
}
