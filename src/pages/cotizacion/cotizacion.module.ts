import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CotizacionPage } from './cotizacion';

@NgModule({
  declarations: [
    CotizacionPage,
  ],
  imports: [
    IonicPageModule.forChild(CotizacionPage),
  ],
})
export class CotizacionPageModule {}
