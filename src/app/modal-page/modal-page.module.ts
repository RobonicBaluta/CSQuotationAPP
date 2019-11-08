import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { ModalPagePage } from './modal-page.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {
    path: '',
    component: ModalPagePage
  }
];

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    ModalPagePage,
],
  declarations: [ModalPagePage],
  providers: [
    StatusBar,
    SplashScreen,
    FileOpener,
   
  ],
})
export class ModalPagePageModule {}
