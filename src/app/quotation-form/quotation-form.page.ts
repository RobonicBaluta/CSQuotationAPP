import { Component, OnInit } from '@angular/core';
import { GivenQuotationsService } from '../services/givenquotations.service';
import { HttpClient } from 'selenium-webdriver/http';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.page.html',
  styleUrls: ['./quotation-form.page.scss'],
})
export class QuotationFormPage implements OnInit {
  myTasksForm: any;
  myTasks: any;
  givenTasks: any;
  
  
  constructor( public givenquotations: GivenQuotationsService, private formBuilder: FormBuilder) {
    
    
    
    this.myTasksForm = this.formBuilder.group({
      "taskListKind": 3,
      "take": 2147483647,

    });
  }
  
  ngOnInit() {
    this.getMyTasks(); 
    
  }
  
  
  async getMyTasks() {
    console.log('hey')
    return this.givenquotations.getGivenTasks(this.myTasksForm.value).subscribe(data=>{this.myTasks=data
      
    });
  }
}