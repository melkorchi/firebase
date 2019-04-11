import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FbService } from '../services/fb.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: any = {
    email: 'melkorchi',
    password: 'mek'
  };
  public userFB: any = {};
  public message: string = 'Test';

  constructor(private auth: AuthService, private router: Router, private fbService: FbService) { }

  ngOnInit() {
  }

  public login() {
    console.log('Page login st');
    console.log(this.user.email, this.user.password);
    this.auth.login(this.user).subscribe(
      response => {
        console.log(response);
        this.router.navigateByUrl('/home');
    });
  }

  public loginFB() {
    this.fbService.facebookConnect().then((data) => {
      // this.theData = JSON.stringify(user);
      this.userFB = data.user;
      this.router.navigateByUrl('/home');
    });
  }

}
