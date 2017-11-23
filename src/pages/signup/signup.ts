import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { HomeTPage } from "../home-t/home-t";
import { HomeCPage } from "../home-c/home-c";
import { ApiProvider } from "../../providers/api/api";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user: User;
  constructor(public navCtrl: NavController, public navParams: NavParams,public api: ApiProvider) {
    this.user = new User();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  doSignUp(){
    this.api.login(this.user);
    this.user =  JSON.parse(localStorage.getItem('user'));
    console.log
    if (this.user.rol == "1")
      this.navCtrl.setRoot(HomeTPage);
     else
      this.navCtrl.setRoot(HomeCPage);

  }
  llenarCampos(){
    console.log("campos mal");
    }

}
