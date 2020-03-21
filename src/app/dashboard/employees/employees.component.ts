import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

export class Worker {
  photo:string;
  name:string;
  surname:string;
  description:string;
  
  constructor(photo: string,name: string,surname: string,description: string) {
    this.photo = photo;
    this.name= name;
    this.surname=surname;
    this.description=description;
}
}
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  constructor(private titleService:Title) { }
  worker:Worker;
  workers:Worker[]=[new Worker("assets/workers/women.png","Tyska ","Tyskowicz","he he silownia he he"),new Worker("assets/workers/men.png","Dj Bocian","Lazlo","Siłownia to moja pasja")];
  ngOnInit() {
    this.titleService.setTitle("JF_Pracownicy");
    this.worker=this.workers[0];
    
  }

}
