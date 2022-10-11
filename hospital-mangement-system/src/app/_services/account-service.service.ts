import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

 
  private url="http://localhost:8080/hms/createUser";
  constructor(private http:HttpClient) { }
  createAccount(account:Account):Observable<Object>{
    let username="berhe";
        let password="pass";
        const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post(`${this.url}`, account ,{headers, responseType:'json'});
  }
}
