import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// Providers....
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './services/auth.service'; // Service
import { AngularFireAuthModule } from 'angularfire2/auth';// Firebase authent
import { AngularFireModule } from '@angular/fire'; // Firebase
// import { AngularFireModule } from '@angularfire2'; // Firebase

import { environment } from 'src/environments/environment';
import { Facebook } from '@ionic-native/facebook/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { FCMService } from './fcm.service';
import { FbService } from './services/fb.service';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule, HttpClientModule],
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FCM,
    FCMService,
    AuthService,
    FbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
