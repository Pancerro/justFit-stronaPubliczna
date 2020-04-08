import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from '../class/worker';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private activitiesUrl:string="localhost:3000/activities";
  private employessUrl:string="https://worker-api-a2.herokuapp.com/getWorkersList";
  private equipmentUrl:string="localhost:3000/equipment";
  private productUrl:string="localhost:3000/product";
  constructor(private http:HttpClient) {}

  getActivities():Observable<String[]>{
    return this.http.get<String[]>(this.activitiesUrl);
  }
  getEmployess():Observable<Worker[]>{
    return this.http.get<Worker[]>(this.employessUrl);
  }
  getEquipment():Observable<String[]>{
    return this.http.get<String[]>(this.equipmentUrl);
  }
  getProduct():Observable<String[]>{
    return this.http.get<String[]>(this.productUrl);
  }
 
}
