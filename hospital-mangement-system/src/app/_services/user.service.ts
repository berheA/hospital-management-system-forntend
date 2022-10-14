import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 URL="http://localhost:8081/hms/authenticate";

 requestHeader:any=new Headers(
           {"No-Auth": "True"}
            )
  constructor(private http:HttpClient,
    private userAuthService:UserAuthService
    ) { }

  //"/authenticate"
  login(loginData:any){
    return this.http.post(this.URL, loginData, {headers:this.requestHeader});
  }



   public roleMatch(allowedRoles:any): any {
    let isMatch = false;
    const userRoles= this.userAuthService.getRoles();

   //const a= JSON.parse(userRoles);
console.log("here" + userRoles);
    if(userRoles==allowedRoles){
      isMatch = true;
        return isMatch;
    }
    else{
      return isMatch;
    }




// if (userRoles != null && userRoles) {
//   for (let i = 0; i < userRoles.length; i++) {
//     for (let j = 0; j < allowedRoles.length; j++) {
//       if (userRoles[i].roleName == allowedRoles[j]) {
//         isMatch = true;
//         return isMatch;
//       } else {
//         return isMatch;
//       }
//     }
//   }
// }
// console.log("from Services" + userRoles + "allowed User:" + allowedRoles);
 
// console.log(userRoles.length + "allowed User:" + allowedRoles.length);
// //console.log(userRoles[0].userRole + "allowed User:" + allowedRoles[j]);
//     if (userRoles != null && userRoles) {
//       console.log(userRoles + "ccc:" + allowedRoles);
//       console.log(typeof userRoles + "ddd:" + typeof allowedRoles);
//       console.log(userRoles==allowedRoles);

//   for (let i = 0; i < userRoles.length; i++) {
//     for (let j = 0; j < allowedRoles.length; j++) {
//       if (userRoles === allowedRoles) {
//         console.log(userRoles + "ddd:" + allowedRoles[j]);
//         isMatch = true;
//         return isMatch;
//       } else {
//         //isMatch=false;
//         return isMatch;

//       }
//     }
//   }
//}


  }
    
}
