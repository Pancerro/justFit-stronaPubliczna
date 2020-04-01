import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(private titleService:Title,
    private dataService:DataServiceService) { }

  ngOnInit() {
    this.titleService.setTitle("JF_Zajęcia");
    this.dataService.getActivities().subscribe(res=>{});
  }

}
