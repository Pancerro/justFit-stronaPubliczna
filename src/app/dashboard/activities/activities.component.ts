import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(private dataService:DataServiceService) { }

  ngOnInit() {
    this.dataService.getActivities().subscribe(res=>{});
  }

}
