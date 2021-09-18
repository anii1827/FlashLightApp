/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  checked: string;
  constructor(private flash: Flashlight) {
  }

  ngOnInit() {
  }

  notify(event){
    if(event.detail.checked){
      this.flash.switchOn();
      this.checked='ON';
    }
    else{
      this.flash.switchOff();
      this.checked='OFF';
    }
  }
}
