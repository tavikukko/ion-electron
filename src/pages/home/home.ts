import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { ToastController, LoadingController } from "ionic-angular";
import { Electron } from './../../providers/electron/electron';
import { Powershell } from './../../providers/powershell/powershell';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public menuCtrl: MenuController,
    public electron: Electron, public powershell: Powershell,
    public Toast: ToastController, public loadingCtrl: LoadingController) {
   // this.menuCtrl.enable(false, 'appMenu');
    /*
        let loading = this.loadingCtrl.create({
          spinner: 'dots',
          content: 'Checking PowerShell version...',
          duration: 7000,
        });

        loading.present();

        setTimeout(() => {   // here may goes your
          loading.setContent("Cheking PnP Module...");
        }, 3000);

        setTimeout(() => {   // here may goes your
          loading.setContent("All good, lets go!!");
        }, 6000);
    */
  }
  zoomIn() {
    this.electron.zoomIn();
  }
  zoomOut() {
    this.electron.zoomOut();
  }
  exeps() {
    var params = [{ siteUrl: 'https://tavikukko365.sharepoint.com' }];

    this.powershell.invokePowerShellScript("test.ps1", params).then(output => {
      console.log(output);
      console.log("ok")
    }).catch(err => {
      console.log(err);
      console.log("not ok")
    })
  }
  enablemenu() {
    this.menuCtrl.enable(true, 'appMenu');
  }
}
