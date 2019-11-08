import { Component, OnInit } from '@angular/core';
import { GivenQuotationsService } from '../services/givenquotations.service';
import { HttpClient } from 'selenium-webdriver/http';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';

@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.page.html',
  styleUrls: ['./quotation-form.page.scss'],
})
export class QuotationFormPage implements OnInit {
  myTasksForm: any;
  myTasks: any;
  givenTasks: any;
  
  
  constructor(public modalController: ModalController, public givenquotations: GivenQuotationsService, private formBuilder: FormBuilder) {
    
    
    
    this.myTasksForm = this.formBuilder.group({
      "taskListKind": 3,
      "take": 2147483647,
    });
  }

  ngOnInit() {
    this.getMyTasks(); 
    
  }
  
  async getMyTasks() {
    return this.givenquotations.getGivenTasks(this.myTasksForm.value).subscribe(data=>{this.myTasks=data
      
    });

  async  addFormModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage,
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log('Modal Sent Data :', dataReturned);
      }
    });
    
    return await modal.present();
  }
}