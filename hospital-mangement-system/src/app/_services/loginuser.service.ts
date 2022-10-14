import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { User } from './models/user';


@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private baseURL="http://localhost:8081/login";

  constructor(private httpClient:HttpClient) { }
  loginUser(user:User): Observable<object>{
    console.log(user);
 return this.httpClient.post(`${this.baseURL}`, user);
  }
}
