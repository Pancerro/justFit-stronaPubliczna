
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor(private titleService:Title) { }
  ngOnInit() {
    this.titleService.setTitle("JF")
  }
  scroll(el:HTMLElement) {
    el.scrollIntoView();
  }
  welcomePage():void{
    var x = document.getElementById("page");
    this.scroll(x);
   }
   activities():void{
    var x = document.getElementById("news");
    this.scroll(x);
   }
   employees():void{
    var x = document.getElementById("employess");
    this.scroll(x);
   }
   equipment():void{
    var x = document.getElementById("equipment");
    this.scroll(x);
   }
   product():void{
    var x = document.getElementById("news");
    this.scroll(x);
  }
  contact():void{
    var x = document.getElementById("contact");
    this.scroll(x);
  }
  webClient():void{}
}
