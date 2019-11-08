import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { InterceptorService } from './services/interceptor.service';
import { FileOpener} from '@ionic-native/file-opener/ngx';
import { ModalPagePage } from './modal-page/modal-page.page';
import { ModalPagePageModule } from './modal-page/modal-page.module';
import { File } from '@ionic-native/file/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, ReactiveFormsModule, ModalPagePageModule, FormsModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule,ModalPagePageModule,
    IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    FileOpener,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    Storage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
