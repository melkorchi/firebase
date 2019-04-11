import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Facebook } from '@ionic-native/facebook/ngx';

@Injectable({
  providedIn: 'root'
})
export class FbService {

  constructor(
    private platform: Platform, 
    private fb: Facebook,
    private fireAuth: AngularFireAuth) {}

  facebookConnect() {
      return new Promise < any > ((resolve, reject) => {
          if (this.platform.is('cordova')) {
              //["public_profile"] is the array of permissions, you can add more if you need
              this.fb.login(["public_profile"]).then((response) => {
                  const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
                  firebase.auth().signInWithCredential(facebookCredential)
                      .then((user) => {
                          resolve(user)
                      });
              }, (err) => {
                  reject(err);
              });
          } else {
              this.fireAuth.auth
                  .signInWithPopup(new firebase.auth.FacebookAuthProvider())
                  .then((user) => {
                      resolve(user)
                  })
          }
      })
  }
  
}
