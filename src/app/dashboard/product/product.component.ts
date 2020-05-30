import { Component, OnInit } from '@angular/core';
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

  constructor(private dataService:DataServiceService) { }

  ngOnInit() {
    this.subscription=this.dataService.getProduct().subscribe((product:Product[])=>{
      console.log(product)
      this.products=product;
      this.products.push(product[0])
    })

  }
  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }
}
