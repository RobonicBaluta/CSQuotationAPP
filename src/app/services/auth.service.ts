import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { EnvService } from './env.service';
const TOKEN_KEY = 'accessToken';
const SERVER = 'server';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  token:any;
  constructor(
    private http: HttpClient,
    private storage: Storage,
    private env: EnvService,
  ) { }
  login(email: String, password: String) {
    return this.http.post(this.env.API_URL + '/Account/Login',
      {username: email +'lisandruandy@gmail.com', password: password+'Start1234!'}
    ).pipe(
      tap(token => {
        this.storage.set('token', token['accessToken'])
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }
 
  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
        this.isLoggedIn = false;
    });
        
  
  }
  
  getToken() {
    return this.storage.get('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }
}