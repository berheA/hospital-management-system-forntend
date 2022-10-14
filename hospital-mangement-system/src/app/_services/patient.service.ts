import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private url="http://localhost:8081/hms/allPatients";
private url2="http://localhost:8081/hms/addPatient";
private url3="http://localhost:8081/hms/patient";
private url4="http://localhost:8081/hms/updatePatient";
private url5="http://localhost:8081/hms/deletePatient";

  constructor(private http:HttpClient) { }
getAllPatients():Observable<Patient[]>{
  let username="berhe";
      let password="pass";
     const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
  return this.http.get<Patient[]>(`${this.url}`,{headers});
}


createPatient(patient:Patient):Observable<Object>{
  let username="berhe";
      let password="pass";
      const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
  return this.http.post(`${this.url2}`, patient ,{headers, responseType:'json'});
}

getPatientById(id:number): Observable<Patient>{
  let username="berhe";
      let password="pass";
      const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
  return this.http.get<Patient>(`${this.url3}/${id}`, {headers});

}
updatePatient(id:number, patient:Patient):Observable<Object>{
  return this.http.put(`${this.url4}/${id}`, patient);
}
deletePatient(id:number):Observable<Object>{
  return this.http.delete(`${this.url5}/${id}`);
}
}
