import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router) { }
  public col:number=10;
  public ngOnInit() {
    if(window.innerWidth<900) this.col=2
    else this.col=10;

  }
  public welcomePage():void{
    this.router.navigate(['/strona-głowna']);
   }
  public onResize(event: { target: { innerWidth: any; }; }) {
    if(event.target.innerWidth<900) this.col=2
    else this.col=10;
  }
}
