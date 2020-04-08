import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Worker } from 'src/app/class/worker';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  constructor(private titleService:Title,
    private dataService:DataServiceService) { }
  worker:Worker;
  private workers:Worker[];
  private subscription:Subscription;
  ngOnInit() {
    this.titleService.setTitle("JF_Pracownicy");
    this.subscription=this.dataService.getEmployess().subscribe((worker:Worker[])=>{
      this.workers=worker
      this.worker=this.workers[0];
    })
  }
  nextWorker(id:number){
    id=id-1;
    if(id==this.workers.length-1) id=0;
    else id++;
    this.worker=this.workers[id]
  }
  previousWorker(id:number){
    id=id-1;
    if(id==0) id=this.workers.length-1;
    else id--;
    this.worker=this.workers[id];
  }
  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe();
  }
}
