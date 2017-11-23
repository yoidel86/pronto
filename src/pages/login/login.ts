import { Component } from '@angular/core';
import { NavController, ModalController } from "ionic-angular";

import {User} from "../../models/user"
import { ApiProvider } from "../../providers/api/api";
import { HomeCPage } from "../home-c/home-c";
import { HomeTPage } from "../home-t/home-t";
import { SignupPage } from "../signup/signup";
import { ForgotPage } from "../forgot/forgot";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user: User;
  constructor(public navCtrl: NavController,public api: ApiProvider,public modalCtrl: ModalController) {
    this.user = new User();
  }

  doLogin() {
    this.api.login(this.user);
    this.user =  JSON.parse(localStorage.getItem('user'));
    if (this.user.rol == "1")
      this.navCtrl.setRoot(HomeTPage);
     else
      this.navCtrl.setRoot(HomeCPage);

 }
 openSignUp(){
  this.navCtrl.push(SignupPage);
 }

  llenarCampos(){
    console.log("escriba correo y contraseña");
  }
  openForgot(){
    const profileModal = this.modalCtrl.create(ForgotPage);

    profileModal.present();
  }

}
