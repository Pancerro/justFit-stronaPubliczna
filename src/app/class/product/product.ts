export class Product {
 public active:boolean;
 public avabileClasses:string;
 public contract:boolean;
 public description:string;
 public durationInMonths:number;
 public id:number;
 public name:string
 public price:number

constructor(active:boolean,avabileClasses:string,contract:boolean,description:string,durationInMonths:number,id:number,name:string,price:number){
    this.active=active;
    this.avabileClasses=avabileClasses;
    this.contract=contract;
    this.description=description;
    this.durationInMonths=durationInMonths;
    this.id=id;
    this.name=name;
    this.price=price;
}

}
