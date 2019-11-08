import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  modalController: any;
  loading: any;
  constructor(public loadingCtrl: LoadingController,
    private file: File,
    private fileOpener: FileOpener) {
  }

  ngOnInit() {
  }
  async  addFormModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage,
    });
  }
  async presentLoading(msg) {
    const loading = await this.loadingCtrl.create({
      message: msg
    });
    return await loading.present();
  }
  exportPdf() {
    this.presentLoading('Creating PDF file...');
    window.alert("hey");
    const div = document.getElementById("printable-area");
    const options = { background: "white", height: div.clientWidth, width: div.clientHeight };
    domtoimage.toPng(div, options).then((dataUrl)=> {
      var doc = new jsPDF("p","mm","a4");
      doc.addImage(dataUrl, 'PNG', 20, 20, 240, 180);
  
      let pdfOutput = doc.output();
      let buffer = new ArrayBuffer(pdfOutput.length);
      let array = new Uint8Array(buffer);
      for (var i = 0; i < pdfOutput.length; i++) {
          array[i] = pdfOutput.charCodeAt(i);
      }
      console.log(pdfOutput);
      const directory = this.file.dataDirectory ;
      window.alert(directory);
      console.log(directory);
      const fileName = "invoice.pdf";
      let options: IWriteOptions = { replace: true };
  
      this.file.checkFile(directory, fileName).then((success)=> {
        //Writing File to Device
        this.file.writeFile(directory,fileName,buffer, options)
        .then((success)=> {
         // this.loading.dismiss();
          console.log("File created Succesfully" + JSON.stringify(success));
          window.alert("File created Succesfully" + JSON.stringify(success));
          window.alert
          this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
            .then(() => console.log('File is opened'))
            .catch(e => console.log('Error opening file', e));
        })
        .catch((error)=> {
          //this.loading.dismiss();
          console.log("Cannot Create File " +JSON.stringify(error));
          window.alert("Cannot Create File " +JSON.stringify(error));


        });
      })
      .catch((error)=> {
        //Writing File to Device
        this.file.writeFile(directory,fileName,buffer)
        .then((success)=> {
         // this.loading.dismiss();
          console.log("File created Succesfully" + JSON.stringify(success));
          window.alert("File created Succesfully" + JSON.stringify(success));

          
          this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
            .then(() => console.log('File is opened'))
            .catch(e => console.log('Error opening file', e));
        })
        .catch((error)=> {
         // this.loading.dismiss();
          console.log("Cannot Create File " +JSON.stringify(error));
          window.alert("Cannot Create File " +JSON.stringify(error));
        });
      });
    })
    .catch(function (error) {
     // this.loading.dismiss();
      console.error('oops, something went wrong!', error);
    });
  }

  }