import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Electron } from './../../providers/electron/electron';
import { Powershell } from './../../providers/powershell/powershell';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public electron: Electron,
  public powershell: Powershell) {
  }
  zoomIn(){
    this.electron.zoomIn();
  }
  zoomOut(){
    this.electron.zoomOut();
  }
  exeps(){
    this.powershell.executeps().then(output => {
      console.log(output);
    }).catch(err => {
      console.log(err);
    })
  }
}
