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
    this.router.navigate(['/strona-głowna']);
   }
   activities():void{
     this.router.navigate(['/zajecia']);
   }
   employees():void{
     this.router.navigate(['/pracownicy']);
   }
   equipment():void{
     this.router.navigate(['/sprzet']);
   }
   product():void{
    this.router.navigate(['/oferta']);
  }
  contact():void{
    this.router.navigate(['/kontakt']);
  }
  webClient():void{}

}
