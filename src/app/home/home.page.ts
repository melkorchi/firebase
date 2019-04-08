import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  theData: string;

  constructor (private auth:AuthService) {}

  goLoginFB() {
    this.auth.facebookConnect().then((user) => {
      this.theData = JSON.stringify(user);
    })
  }
}
