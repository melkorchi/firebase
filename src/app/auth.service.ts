import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private platform: Platform, private fireAuth: AngularFireAuth) {}

    facebookConnect() {
        return new Promise < FirebaseUserModel > ((resolve, reject) => {
            if (this.platform.is('cordova')) {
                //["public_profile"] is the array of permissions, you can add more if you need
                this.fb.login(["public_profile"]).then((response) => {
                    const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
                    firebase.auth().signInWithCredential(facebookCredential)
                        .then((user) => {
                            resolve()
                        });
                }, (err) => {
                    reject(err);
                });
            } else {
                this.fireAuth.auth
                    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
                    .then((user) => {
                        resolve()
                    })
            }
        })
    }
    // https://ionicthemes.com/tutorials/about/ionic-facebook-login
}

