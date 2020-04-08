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
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})


export class WelcomePageComponent implements OnInit {
  news:News[]=[];
  clickedNews:News=new News("","","","");
  sizeNews:number=5;
  @ViewChild('sidenav',null) sidenav: MatSidenav;
  allMessage:boolean
  constructor(private titleService:Title) { }

  ngOnInit() {
    console.log(window.innerHeight)
    this.titleService.setTitle("JF_Strona Główna");
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
