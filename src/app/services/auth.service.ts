import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { HTTP } from '@ionic-native/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: String = "https://api-jo.herokuapp.com";

  constructor(public http: HttpClient) { }
  // constructor(private http: HTTP) { }

  login(postParams:any):Observable<any> {
    return this.http.post(
      this.apiUrl + '/login',
      JSON.stringify(postParams),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods':'POST, GET, PUT, OPTIONS, DELETE, PATCH',
          'Accept':'application/json',
        }
      }
    );
  }

  register(users:any):Observable<any> {
    return this.http.post(
      this.apiUrl + '/users',
      JSON.stringify(users),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods':'POST, GET, PUT, OPTIONS, DELETE, PATCH',
          'Accept':'application/json',
        }
      }
    );
  }
}
