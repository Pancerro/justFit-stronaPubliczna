import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
 constructor(
   private router: Router
 ) {}
   welcomePage():void{
    this.router.navigate(['/strona-glowna']);
   }
   activities():void{

     this.router.navigate(['/strona-glowna']);
   }
   employees():void{

     this.router.navigate(['/strona-glowna']);
   }
   equipment():void{
     this.router.navigate(['/strona-glowna']);
   }
   product():void{
    this.router.navigate(['/strona-glowna']);
  }
  contact():void{
    this.router.navigate(['/strona-glowna']);
  }
  webClient():void{}

}
