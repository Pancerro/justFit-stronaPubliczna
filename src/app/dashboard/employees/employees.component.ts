import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

export class Worker {
  id:number;
  photo:string;
  name:string;
  surname:string;
  description:string;
  
  constructor(id:number,photo: string,name: string,surname: string,description: string) {
    this.id=id;
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
  workers:Worker[]=[new Worker(0,"assets/workers/women.png","Tyska ","Tyskowicz","he he silownia he he"),new Worker(1,"assets/workers/men.png","Dj Bocian","Lazlo","Siłownia to moja pasja")];
  ngOnInit() {
    this.titleService.setTitle("JF_Pracownicy");
    this.worker=this.workers[0];
    
  }
  nextWorker(id:number){
    if(id+1==this.workers.length) id=0;
    else id++;
    this.worker=this.workers[id]

  }
  previousWorker(id:number){
    if(id==0) id=this.workers.length-1;
    else id--;
    this.worker=this.workers[id];
  }
}
