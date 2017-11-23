import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { CrearSolPage } from "../crear-sol/crear-sol";
import { SolPenPage } from "../sol-pen/sol-pen";
import { TrasladosCttdPage } from "../traslados-cttd/traslados-cttd";

/**
 * Generated class for the HomeCPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-c',
  templateUrl: 'home-c.html',
})
export class HomeCPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeCPage');
  }
  exit(){
    localStorage.removeItem('user');
    this.navCtrl.setRoot(LoginPage);
  }
  openAdd(){
    this.navCtrl.push(CrearSolPage);
  }
  openPendiente(){
    this.navCtrl.push(SolPenPage);
  }
  openTrasladosCttd(){
    this.navCtrl.push(TrasladosCttdPage);
  }

}
