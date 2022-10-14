import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

 
  private url="http://localhost:8081/hms/createUser";
  private url2="http://localhost:8081/hms/allUsers";
  constructor(private http:HttpClient) { }
  createAccount(account:Account):Observable<Object>{
    let username="berhe";
        let password="pass";
        const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post(`${this.url}`, account ,{headers, responseType:'json'});
  }



  getAllDoctors():Observable<Account[]>{
    let username="berhe";
        let password="pass";
       const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get<Account[]>(`${this.url2}`,{headers});
  }
}
