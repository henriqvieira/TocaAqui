import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FacebookService, InitParams, LoginResponse, LoginOptions } from "ngx-facebook/dist/esm";
import { Pagina } from "src/app/pagina";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  email: string;
  senha: string;
  id: string;

  paginas: Pagina[] = [];

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
   // this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
   this.fb.login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
      .catch(this.handleError);
  }

  loginWithOptions() {

    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile, user_likes'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
        this.id = this.fb.getAuthResponse().userID;
      })
      .catch(this.handleError);
  }

  mostraToken(){
    console.log(this.validaToken());
  }

  mostraUsuario(){
    console.log(this.fb.getAuthResponse().userID);
    this.id = this.fb.getAuthResponse().userID;
  }

  retornaPagina(){
     this.fb.api('444224355588448')
      .then((res: any) => {
        console.log('Got the users profile', res);
      })
      .catch(this.handleError);
  }

  validaToken() {
    if(this.fb.getAuthResponse()){
    return true;
    }
    else
    return false;
  }

  getDados() {
    this.fb.api('me/likes')
      .then((res: any) => {
        this.paginas = res.data;   })
      .catch(this.handleError);
  }

  imprimeDados(){
    console.log(this.paginas);
  }

  getFoto() {
    this.fb.api('/me/picture')
      .then((res: any) => {
        console.log('Got the users profile', res);
      })
      .catch(this.handleError);

  }

  private handleError(error) {
    console.error('Error processing action', error);
  }

  loginEmail() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.senha).catch((erro: any) => {
      console.log();
    });
  }

  sair() {
    this.fb.logout();
  }
}
