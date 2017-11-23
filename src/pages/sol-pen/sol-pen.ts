import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CotizacionPage } from "../cotizacion/cotizacion";

/**
 * Generated class for the SolPenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sol-pen',
  templateUrl: 'sol-pen.html',
})
export class SolPenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openCotizacion(){
    this.navCtrl.push(CotizacionPage);
  }


}
