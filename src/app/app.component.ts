import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FacebookService, InitParams, LoginResponse, LoginOptions } from "ngx-facebook/dist/esm";
import { Likes } from "src/app/likes";
import { Usuario } from "src/app/usuario";

import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: Observable<firebase.User>;
  email: string;
  senha: string;
  id: string;

  usuario = Usuario;

  likes: Likes[] = [];

  constructor(public afAuth: AngularFireAuth, private http: Http, private fb: FacebookService, private router: Router, private rota: ActivatedRoute) {
    this.user = this.afAuth.authState;

    let initParams: InitParams = {
      appId: "639462306396265",
      xfbml: true,
      version: 'v3.0'
    };

    fb.init(initParams);
  }

/*  loginFacebook() {
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
      scope: 'public_profile, user_likes, email'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        this.router.navigate(['home'])
        this.id = this.fb.getAuthResponse().userID;
      })
      .catch(this.handleError);
    if (this.id != '0') {
      this.router.navigate(['home'])
    };
  }

  mostraToken() {
    console.log(this.validaToken());
  }

  mostraUsuario() {
    console.log(this.fb.getAuthResponse().userID);
    this.id = this.fb.getAuthResponse().userID;
  }

  retornaPagina() {
    this.fb.api('444224355588448')
      .then((res: any) => {
        console.log('Got the users profile', res);
      })
      .catch(this.handleError);
  }

  validaToken() {
    if (this.fb.getAuthResponse()) {
      return true;
    }
    else
      return false;
  }

  getDados() {
    this.fb.api('me/likes')
      .then((res: any) => {
        this.likes = res.data;
      })
      .catch(this.handleError);
  }

  getUsuario() {
    this.fb.api('/me?fields=email')
      .then((res: any) => {
        console.log(res);
      })
      .catch(this.handleError);
  }

  getDadosUsuario() {
    this.fb.api('/me?fields=id,name,email,likes,location')
      .then((res: any) => {
        this.usuario = res;
      })
      .catch(this.handleError);
  }

  imprimeDados() {
    console.log(this.usuario);
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
    this.router.navigate([''])

  }*/
}
