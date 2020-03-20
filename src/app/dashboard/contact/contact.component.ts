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

  ngOnInit() {
    this.titleService.setTitle("Kontakt");
  }

  welcomePage():void{
    this.router.navigate(['/strona-głowna']);
   }
}
