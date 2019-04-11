import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  theData: string;
  userFB: any;

  constructor (private auth:AuthService) {}

  goLoginFB() {
    this.auth.facebookConnect().then((data) => {
      // this.theData = JSON.stringify(user);
      this.userFB = data.user;
      // console.log(data);
      console.log(this.userFB.displayName);
      console.log(this.userFB.email);
    })
  }
}
