import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FacebookService, InitParams } from "ngx-facebook/dist/esm";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  email: string;
  senha: string;

  constructor(public afAuth: AngularFireAuth, private http: Http, private fb: FacebookService) {
    this.user = this.afAuth.authState;

    let initParams: InitParams = {
      appId: "639462306396265",
      xfbml: true,
      version: 'v3.0'
    };

    fb.init(initParams);
  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  validaToken() {
    this.fb.getLoginStatus();
  }

  getDados() {
    this.validaToken();
    this.fb.api('/me/likes', 'get', function (response) {
      console.log("dados: " + response);
      if (!response || response.error) {
        alert('Error occured');
      } else {
        alert('Post ID: ' + response.id);
      }
    });
  }

  loginEmail() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.senha).catch((erro: any) => {
      console.log();
    });
  }

  sair() {
    this.afAuth.auth.signOut();
  }
}
