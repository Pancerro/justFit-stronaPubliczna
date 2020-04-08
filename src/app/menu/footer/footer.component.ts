import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( private router: Router) { }
  cols:number;
  ngOnInit() {
    if(window.innerWidth<1000) this.cols=1;
    else this.cols=2;
  }
  welcomePage():void{
    this.router.navigate(['/strona-głowna']);
   }

}
