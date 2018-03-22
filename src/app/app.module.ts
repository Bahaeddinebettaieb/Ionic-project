import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule , LOCALE_ID} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http'
import { RestProvider } from '../providers/rest/rest';
import { ProductPage } from '../pages/product/product';
import { FormsModule } from '@angular/forms';
import ptBr from '@angular/common/locales/pt';
import {registerLocaleData}from '@angular/common';

registerLocaleData(ptBr)

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    ProductPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductPage
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
