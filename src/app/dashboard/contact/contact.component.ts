import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private titleService:Title,
    private router: Router) { }
    col:number=5;
  ngOnInit() {
    this.titleService.setTitle("JF_Kontakt");
    if(window.innerWidth<900) this.col=2;
  }

  welcomePage():void{
    this.router.navigate(['/strona-głowna']);
   }
}
