import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  subscription:Subscription;
  constructor(private titleService:Title,
    private dataService:DataServiceService) { }

  ngOnInit() {
    this.titleService.setTitle("JF_Oferta");
    this.subscription=this.dataService.getProduct().subscribe(res=>{})
  }
  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }
}
