import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from "../../providers/api/api";
import { LoginPage } from "../login/login";
import { SolTrasPage } from "../sol-tras/sol-tras";
import { VehiculoPage } from "../vehiculo/vehiculo";


@IonicPage()
@Component({
  selector: 'page-home-t',
  templateUrl: 'home-t.html',
})
export class HomeTPage {
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public api: ApiProvider) {
    this.user = this.api.getUser();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  exit(){
    localStorage.removeItem('user');
    this.navCtrl.setRoot(LoginPage);
  }
  openSolTras(){
    this.navCtrl.push(SolTrasPage);
  }
  openVehiculo(){
    this.navCtrl.push(VehiculoPage);
  }


}
