import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicalCenter } from '../models/medicalCenter';

@Injectable({
  providedIn: 'root'
})
export class MedicalCenterService {
private url="http://localhost:8080/hms/allMedicalCenters";
private url2="http://localhost:8080/hms/addMedicalCenter";
private url3="http://localhost:8080/hms/medicalCenter";
private url4="http://localhost:8080/hms/updateMedicalCenter";
private url5="http://localhost:8080/hms/deleteMedicalCenter";

  constructor(private http:HttpClient) { }
getAllMedicalCenters():Observable<MedicalCenter[]>{
  let username="berhe";
      let password="pass";
     const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
  return this.http.get<MedicalCenter[]>(`${this.url}`,{headers});
}


createMedicalCenter(medicalCenter:MedicalCenter):Observable<Object>{
  let username="berhe";
      let password="pass";
      const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
  return this.http.post(`${this.url2}`, medicalCenter ,{headers, responseType:'json'});
}

getMedicalCenterById(id:number): Observable<MedicalCenter>{
  let username="berhe";
      let password="pass";
      const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
  return this.http.get<MedicalCenter>(`${this.url3}/${id}`, {headers});

}
updateMedicalCenter(id:number, medicalCenter:MedicalCenter):Observable<Object>{
  return this.http.put(`${this.url4}/${id}`, medicalCenter);
}
deleteMedicalCenter(id:number):Observable<Object>{
  return this.http.delete(`${this.url5}/${id}`);
}
}