import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor( private router: Router) { }
  ngOnInit() {
  }
  public welcomePage():void{
    this.router.navigate(['/strona-głowna']);
   }
  public privacy():void{
    this.router.navigate(['/dataprivacy']);
   }
}
