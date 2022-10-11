import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
private url="http://localhost:8080/hms/allAppointments";
private url2="http://localhost:8080/hms/addAppointment";
private url3="http://localhost:8080/hms/appointment";
private url4="http://localhost:8080/hms/updateAppointment";
private url5="http://localhost:8080/hms/deleteAppointment";

  constructor(private http:HttpClient) { }
getAllAppointments():Observable<Appointment[]>{
  let username="berhe";
      let password="pass";
     const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
  return this.http.get<Appointment[]>(`${this.url}`,{headers});
}


createAppointment(appointment:Appointment):Observable<Object>{
  let username="berhe";
      let password="pass";
      const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
  return this.http.post(`${this.url2}`, appointment ,{headers, responseType:'json'});
}

getAppointmentById(id:number): Observable<Appointment>{
  let username="berhe";
      let password="pass";
      const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
  return this.http.get<Appointment>(`${this.url3}/${id}`, {headers});

}
updateAppointment(id:number, appointment:Appointment):Observable<Object>{
  return this.http.put(`${this.url4}/${id}`, appointment);
}
deleteAppointment(id:number):Observable<Object>{
  return this.http.delete(`${this.url5}/${id}`);
}
}