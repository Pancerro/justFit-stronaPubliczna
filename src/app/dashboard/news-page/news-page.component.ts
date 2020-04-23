import { Component, OnInit , ViewChild} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {MatSidenav} from '@angular/material/sidenav';
export class News {
    img:string;
    shortMessage:string;
    date:string;
    message:string;
    
    constructor(img: string,shortMessage: string,date: string,message: string) {
      this.img = img;
      this.shortMessage= shortMessage;
      this.date=date;
      this.message=message;
  }
}

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})


export class NewsPageComponent implements OnInit {
  news:News[]=[];
  clickedNews:News=new News("","","","");
  sizeNews:number=5;
  @ViewChild('sidenav',null) sidenav: MatSidenav;
  allMessage:boolean
  constructor() { }

  ngOnInit() {
    for(let i=0;i<this.sizeNews;i++){
      this.news.push(new News("assets/komunikat.png","Awaria","1/1/1","Drdzy przyjaciele"))
    }
  }
  sideNaveOpenOneNews(news:News){
    this.allMessage=false;
    this.clickedNews=news
    this.sidenav.open()
  }
  sideNaveOpenAllNews(){
    this.allMessage=true;
    this.sidenav.open()
  }


}
