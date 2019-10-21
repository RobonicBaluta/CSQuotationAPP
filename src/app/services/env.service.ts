import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'https://csapi.soltystudio.com/api/v1';
  
  constructor() { }
}