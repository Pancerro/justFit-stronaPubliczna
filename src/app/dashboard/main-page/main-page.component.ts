
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor(private titleService: Title) { }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollOffset >= 40) {
      document.querySelectorAll('.sticky').forEach((c) => {
        c.classList.add('scroll');
      });
      document.querySelectorAll('.web-client').forEach((c) => {
        c.classList.add('new-color');
      });
      document.querySelectorAll('.logo').forEach((c) => {
        c.classList.add('scroll');
      });
      document.querySelectorAll('.menu-benefit-card').forEach((c) => {
        c.classList.add('scroll');
      });
    } else {
      document.querySelectorAll('.sticky').forEach((c) => {
        c.classList.remove('scroll');
      });
      document.querySelectorAll('.web-client').forEach((c) => {
        c.classList.remove('new-color');
      });
      document.querySelectorAll('.logo').forEach((c) => {
        c.classList.remove('scroll');
      });
      document.querySelectorAll('.menu-benefit-card').forEach((c) => {
        c.classList.remove('scroll');
      });
    }
  }
  ngOnInit() {
    this.titleService.setTitle("JF")
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  welcomePage(): void {
    var x = document.getElementById("page");
    this.scroll(x);
  }
  activities(): void {
    var x = document.getElementById("news");
    this.scroll(x);
  }
  employees(): void {
    var x = document.getElementById("employess");
    this.scroll(x);
  }
  equipment(): void {
    var x = document.getElementById("equipment");
    this.scroll(x);
  }
  product(): void {
    var x = document.getElementById("product");
    this.scroll(x);
  }
  contact(): void {
    var x = document.getElementById("contact");
    this.scroll(x);
  }
  webClient(): void { }
}
