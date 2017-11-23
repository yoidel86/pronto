import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { SendContizacionPage } from "../send-contizacion/send-contizacion";

/**
 * Generated class for the SolTrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sol-tras',
  templateUrl: 'sol-tras.html',
})
export class SolTrasPage {

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolTrasPage');
  }
  enviarCotizacion(){
    const profileModal = this.modalCtrl.create(SendContizacionPage);

        profileModal.present();
  }

}
