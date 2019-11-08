import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'

})
export class GivenQuotationsService{

    url = 'https://csapi.soltystudio.com/';
  myTasks: any;
    

    constructor(private http: HttpClient, public envService : EnvService) {}



    getGivenTasks(data): Observable <any>{
        return this.http.post(this.envService.API_URL+'/tasks/get',data,httpOptions);
                                                       
    }

}


