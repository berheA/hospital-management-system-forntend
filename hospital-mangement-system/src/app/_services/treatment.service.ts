import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{Treatment} from 'src/app/models/treatment'

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  private url="http://localhost:8081/hms/allTreatments";
private url2="http://localhost:8081/hms/addTreatment";
private url3="http://localhost:8081/hms/treatment";
private url4="http://localhost:8081/hms/updateTreatment";
private url5="http://localhost:8081/hms/deleteTreatment";

  constructor(private http:HttpClient) { }
getAllTreatments():Observable<Treatment[]>{
  let username="berhe";
      let password="pass";
     const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
  return this.http.get<Treatment[]>(`${this.url}`,{headers});
}


createTreatment(treatment:Treatment):Observable<Object>{
  let username="berhe";
      let password="pass";
      const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
  return this.http.post(`${this.url2}`, treatment ,{headers, responseType:'json'});
}

getTreatmentById(id:number): Observable<Treatment>{
  let username="berhe";
      let password="pass";
      const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
  return this.http.get<Treatment>(`${this.url3}/${id}`, {headers});

}
updateTreatment(id:number, treatment:Treatment):Observable<Object>{
  return this.http.put(`${this.url4}/${id}`, treatment);
}
deleteTreatment(id:number):Observable<Object>{
  return this.http.delete(`${this.url5}/${id}`);
}
}
