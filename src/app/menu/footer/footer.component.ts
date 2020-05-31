import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor( private router: Router) { }
  public heigth:number=12;
  ngOnInit() {
    console.log(window.innerWidth)
    if(window.innerWidth<590) this.heigth=4;
    else this.heigth=12;

  }
  public welcomePage():void{
    this.router.navigate(['/strona-głowna']);
   }
  public privacy():void{
    this.router.navigate(['/dataprivacy']);
   }
}
