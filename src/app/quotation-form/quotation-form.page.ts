import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.page.html',
  styleUrls: ['./quotation-form.page.scss'],
})
export class QuotationFormPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
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