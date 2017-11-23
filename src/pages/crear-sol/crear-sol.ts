import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CrearSolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-sol',
  templateUrl: 'crear-sol.html',
})
export class CrearSolPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  addSol(){
    this.navCtrl.pop();

  }
  llenarCampos(){
    console.log("escriba correo y contraseña");
  }

}
