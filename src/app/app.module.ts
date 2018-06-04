import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';

import { FacebookModule } from 'ngx-facebook';


export const firebaseConfig = {
  apiKey: "AIzaSyAT4UxisB3ofCDesNP-u_xSTPuJosPmXvA",
  authDomain: "tocaaqui-5367f.firebaseapp.com",
  databaseURL: "https://tocaaqui-5367f.firebaseio.com",
  storageBucket: "tocaaqui-5367f.appspot.com",
  messagingSenderId: "352409068998"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpModule,
    AngularFireAuthModule,
    FacebookModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
