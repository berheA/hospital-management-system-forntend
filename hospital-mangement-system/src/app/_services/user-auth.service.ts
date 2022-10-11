import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }


  // public setRoles(roles: []) {
  //   localStorage.setItem('roles', JSON.stringify(roles));
  // }
  public setRoles(roles: any) {
    localStorage.setItem('roles', roles);
  }


  // public getRoles():[] {

  //   //localStorage.getItem("roles") !== undefined ? JSON.parse(localStorage.getItem("roles")) : null;
    
  //   return  JSON.parse(localStorage.getItem('roles') || '[ ]');
  // }
  public getRoles(){

    //localStorage.getItem("roles") !== undefined ? JSON.parse(localStorage.getItem("roles")) : null;
    
    return  localStorage.getItem('roles');
  }



  public setFirstName(firstName: any) {
    localStorage.setItem('fm', firstName);
  }
  public getFirstName(){
    return  localStorage.getItem('fm');
  }
  
  public setLastName(lastName: any) {
    localStorage.setItem('ln', lastName);
  }
  public getLastName(){
    return  localStorage.getItem('ln');
  }


  public setEmail(email: any) {
    localStorage.setItem('email', email);
  }
  public getEmail(){
    return  localStorage.getItem('email');
  }
  public setUserId(userId: any) {
    localStorage.setItem('userId', userId);
  }
  public getUserId(){
    return  localStorage.getItem('userId');
  }
  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(){
    
    return localStorage.getItem('jwtToken');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    
    return this.getRoles() && this.getToken();
  }
}
