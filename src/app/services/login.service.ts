import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json',})
};
const apiUrl = 'https://csapi.soltystudio.com/api/v1/Account/Login';
@Injectable({
  providedIn: 'root'
})


export class RestApiService {

  apiUrl:string;
  constructor(private http:HttpClient) { }

  login() :Observable <any>{
    return this.http.post(apiUrl,httpOptions);
  }

}
