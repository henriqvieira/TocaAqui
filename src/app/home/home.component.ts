import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FacebookService } from "ngx-facebook/dist/esm";
import { Usuario } from "src/app/usuario";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

usuario = Usuario;
  id: string;


  constructor( private fb: FacebookService, private router: Router, private rota: ActivatedRoute) {
    this.id = this.fb.getAuthResponse().userID;
   }

  ngOnInit() {
  }

    validaToken() {
    if (this.fb.getAuthResponse()) {
      return true;
    }
    else
      return false;
  }

    mostraToken() {
    console.log(this.validaToken());
  }

    getDadosUsuario() {
    this.fb.api('/me?fields=id,name,email,likes,location')
      .then((res: any) => {
        this.usuario = res;
      })
      .catch(this.handleError);
  }

   private handleError(error) {
    console.error('Error processing action', error);
  }

  imprimeDados() {
    console.log(this.usuario);
  }
}
