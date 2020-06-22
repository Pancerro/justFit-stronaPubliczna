import { Component, OnInit , ViewChild} from '@angular/core';
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
  public news:News[]=[];
  public clickedNews:News=new News("","","","");
  public sizeNews:number=4;
  @ViewChild('sidenav',null) sidenav: MatSidenav;
  public allMessage:boolean
  constructor() { }

  ngOnInit() {
    for(let i=0;i<this.sizeNews;i++){
      this.news.push(new News("assets/komunikat.png","Lorem Ipsum","1/1/1","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae aliquam sem. In arcu metus, fringilla sed vestibulum ac, condimentum non sapien. Sed laoreet lacinia augue, in fringilla ligula. Nunc interdum commodo dolor elementum hendrerit. Duis tincidunt lacus vitae ullamcorper fermentum. Donec aliquam neque et congue aliquet. Integer nec augue vel metus sollicitudin pulvinar."
      +"Donec at ante ac dui luctus efficitur. Vestibulum imperdiet non ipsum vitae bibendum. Donec pellentesque rhoncus vulputate. Quisque commodo ac dui ac malesuada. Nulla non pretium risus. Ut lacinia magna felis, dapibus viverra urna fringilla id. Vivamus consectetur lectus a tristique blandit. Suspendisse ac pharetra arcu. Suspendisse non urna quis quam consequat vestibulum ac a enim. Nullam accumsan eleifend odio, id vulputate purus rhoncus nec. Nulla volutpat sed nisi vel hendrerit. Nunc a felis quis enim feugiat pretium. Nulla sodales tincidunt risus, et fermentum quam. Sed laoreet risus ac ligula venenatis faucibus. Mauris tempor dapibus suscipit. Aliquam ut finibus sapien, nec accumsan nibh."
      +"Sed scelerisque quis magna non pellentesque. Donec tincidunt sapien massa, in gravida nulla sodales sit amet. Nam enim nulla, placerat et lacus et, lacinia vestibulum tortor. Morbi quis imperdiet metus. Vestibulum molestie lacus a eros vestibulum, eget commodo turpis rhoncus. Nullam tempor iaculis dapibus. Maecenas id vulputate nisi, in lacinia diam. Suspendisse posuere aliquet nibh et sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sed viverra nisi."
  ))
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
