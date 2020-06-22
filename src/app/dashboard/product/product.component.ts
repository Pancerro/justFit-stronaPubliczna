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
  private subscription: Subscription;
  public products: Product[]=[];
  public col: number = 3;
  public row: number = 2;
  public colButton: number = 1;
  constructor(private dataService: DataServiceService) { }
  public ngOnInit(): void {
    this.subscription = this.dataService.getProduct().subscribe((product: Product[]) => {
      for(let products of product){
        if(products.active) this.products.push(products);
      }

    })
    if (window.innerWidth < 500) {
      this.col = 1;
      this.row = 2
      this.colButton = 1
    }
    else {
      if (window.innerWidth < 640) {
        this.col = 1;
        this.row = 3
        this.colButton = 1
      }
      else {
        if (window.innerWidth < 1400) {
          if (window.innerWidth < 1040) {
            this.col = 2;
            this.row = 1.5;
            this.colButton = 2
          }
          else {
            this.col = 2;
            this.row = 2;
            this.colButton = 2;
          }
        }
        else {
          this.col = 3;
          this.row = 2;
          this.colButton = 1;
        }
      }
    }
  }
  public ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
  public onResize(event: { target: { innerWidth: any; }; }) {
    if (window.innerWidth < 500) {
      this.col = 1;
      this.row = 2;
      this.colButton = 1;
    }
    else {
      if (event.target.innerWidth < 640) {
        this.col = 1;
        this.row = 3;
        this.colButton = 1;
      }
      else {
        if (event.target.innerWidth < 1400) {
          if (event.target.innerWidth < 1040) {
            this.col = 2;
            this.row = 1.5;
            this.colButton = 2
          }
          else {
            this.col = 2;
            this.row = 2;
            this.colButton = 2;
          }
        }
        else {
          this.col = 3;
          this.row = 2;
          this.colButton = 1;
        }
      }
    }
  }
}
