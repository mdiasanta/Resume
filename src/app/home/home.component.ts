import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clickMessage = '';
  visible=false;

  toggleCard(){

    this.visible=!this.visible;
  }

  onClickMe() {
    this.clickMessage = 'Just Kidding, This button does not do anything.';
  }
}
