import { Observable } from 'rxjs';
import { Product } from '../class/product/product';
import { Worker } from '../class/worker/worker';
import { Equipment } from '../class/equipment/equipment';

export interface DataServiceInterface {
    getActivities(): Observable<String[]>;
    getEmployess(): Observable<Worker[]>;
    getEquipment(): Observable<Equipment[]>;
    getProduct(): Observable<Product[]>;
}
