import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor( private dataService:DataServiceService) { }

  ngOnInit() {
    this.dataService.getEquipment().subscribe(res=>{});
  }
  imageObject: Array<object> = [{
    image: 'assets/equipment/1.jpg',
    thumbImage: 'assets/equipment/1.jpg',
    alt: 'JustFit',
    title: 'JustFit'
},
{
  image: 'assets/equipment/2.jpg',
  thumbImage: 'assets/equipment/2.jpg',
  alt: 'JustFit',
  title: 'JustFit'
},{
  image: 'assets/equipment/3.jpg',
  thumbImage: 'assets/equipment/3.jpg',
  alt: 'JustFit',
  title: 'JustFit'
},{
  image: 'assets/equipment/4.jpg',
  thumbImage: 'assets/equipment/4.jpg',
  alt: 'JustFit',
  title: 'JustFit'
},{
  image: 'assets/equipment/5.jpg',
  thumbImage: 'assets/equipment/5.jpg',
  alt: 'JustFit',
  title: 'JustFit'
},{
  image: 'assets/equipment/6.jpg',
  thumbImage: 'assets/equipment/6.jpg',
  alt: 'JustFit',
  title: 'JustFit'
},{
  image: 'assets/equipment/7.jpg',
  thumbImage: 'assets/equipment/7.jpg',
  alt: 'JustFit',
  title: 'JustFit'
},{
  image: 'assets/equipment/8.jpg',
  thumbImage: 'assets/equipment/8.jpg',
  alt: 'JustFit',
  title: 'JustFit'
},{
  image: 'assets/equipment/9.jpg',
  thumbImage: 'assets/equipment/9.jpg',
  alt: 'JustFit',
  title: 'JustFit'
},{
  image: 'assets/equipment/3.jpg',
  thumbImage: 'assets/equipment/3.jpg',
  alt: 'JustFit',
  title: 'JustFit'
},{
  image: 'assets/equipment/4.jpg',
  thumbImage: 'assets/equipment/4.jpg',
  alt: 'JustFit',
  title: 'JustFit'
},{
  image: 'assets/equipment/5.jpg',
  thumbImage: 'assets/equipment/5.jpg',
  alt: 'JustFit',
  title: 'JustFit'
},{
  image: 'assets/equipment/6.jpg',
  thumbImage: 'assets/equipment/6.jpg',
  alt: 'JustFit',
  title: 'JustFit'
},{
  image: 'assets/equipment/7.jpg',
  thumbImage: 'assets/equipment/7.jpg',
  alt: 'JustFit',
  title: 'JustFit'
},{
  image: 'assets/equipment/8.jpg',
  thumbImage: 'assets/equipment/8.jpg',
  alt: 'JustFit',
  title: 'JustFit'
},{
  image: 'assets/equipment/9.jpg',
  thumbImage: 'assets/equipment/9.jpg',
  alt: 'JustFit',
  title: 'JustFit'
}

];

}
