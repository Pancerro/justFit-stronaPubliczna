import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dataprivacy',
  templateUrl: './dataprivacy.component.html',
  styleUrls: ['./dataprivacy.component.css']
})
export class DataprivacyComponent implements OnInit {

  constructor(   private router: Router) { }

  ngOnInit() {
  }
  public welcomePage():void{
    this.router.navigate(['']);
   }
}
