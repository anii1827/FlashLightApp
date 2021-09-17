import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  checked: boolean;
  constructor(private flash: Flashlight) { }

  ngOnInit() {
    this.checked= false;
  }

  notify(){
      if(this.checked && !(this.flash.isSwitchedOn)){
        this.flash.switchOn();
      }
      if(!(this.checked) && this.flash.isSwitchedOn){
        this.flash.switchOff();
      }
  }
}
