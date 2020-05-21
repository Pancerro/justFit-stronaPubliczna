import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/class/product/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private subscription:Subscription;
  public products:Product[];
  public product:Product;

  constructor(private titleService:Title,
    private dataService:DataServiceService) { }

  ngOnInit() {
    this.titleService.setTitle("JF_Oferta");
    this.subscription=this.dataService.getProduct().subscribe((product:Product[])=>{
      this.products=product;
      this.product=this.products[0];
    })
  }
  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }
}
