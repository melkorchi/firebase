import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FCM } from '@ionic-native/fcm/ngx';

import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FCMService {

  constructor(
      private platform: Platform,
      public fcm: FCM
    ) { }

    generateToken() {
      this.fcm.getToken().then((token: string) => {
        console.log('token', token);
        this.refreshToken();
      })
    }

    refreshToken() {
      this.fcm.onTokenRefresh().subscribe((token: string) => {
        console.log("New token: " + token);
      })
    }
}
