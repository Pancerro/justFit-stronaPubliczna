import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from '../class/worker/worker';
import {DataServiceInterface} from './data-service-interface';
import { Product } from '../class/product/product';
import { Equipment } from '../class/equipment/equipment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService implements DataServiceInterface{
  private activitiesUrl:string="https://planowanie-zajec.herokuapp.com/getAllActivities";
  private employessUrl:string="https://worker-api-175ic-a2.herokuapp.com/getWorkersList";
  private equipmentUrl:string="https://justfitequipmentcatalog.herokuapp.com/justfit/equipment/getAll";
  private productUrl:string="https://justfit-products.herokuapp.com/products";
  constructor(private http:HttpClient) {}

  public getActivities():Observable<String[]>{
    return this.http.get<[]>(this.activitiesUrl);
  }
  public getEmployess():Observable<Worker[]>{
    return this.http.get<Worker[]>(this.employessUrl);
  }
  public getEquipment():Observable<Equipment[]>{
    return this.http.get<Equipment[]>(this.equipmentUrl);
  }
  public getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl);
  }
}
