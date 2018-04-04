import { Injectable } from '@angular/core';
import * as powershell from 'node-powershell';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the Powershellr provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class Powershell {

  ps = new powershell({
    executionPolicy: 'Bypass',
    noProfile: true,
    usePwsh: true
  });

  constructor(public http: HttpClient) {
  }

  executeps() {
    return new Promise((resolve, reject) => {
      this.http.get('/assets/ps-scripts/Connect-PnPOnline.ps1', { responseType: 'text' })
        .subscribe((script) => {
          let commands = [{ siteUrl: "https://tavikukko365.sharepoint.com" }];
          let command = script.replace("$siteUrl", "https://tavikukko365.sharepoint.com");
          this.ps.addCommand(command, []);
          this.ps.invoke()
            .then(output => {
              resolve(output);
            })
            .catch(err => {
              this.ps.dispose();
              reject(err);
            });
        });
    });
  }

}
