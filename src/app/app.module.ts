import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ApiProvider } from '../providers/api/api';
import { HomeTPage } from "../pages/home-t/home-t";
import { HomeCPage } from "../pages/home-c/home-c";
import { SignupPage } from "../pages/signup/signup";
import { ForgotPage } from "../pages/forgot/forgot";
import { CrearSolPage } from "../pages/crear-sol/crear-sol";
import { SolPenPage } from "../pages/sol-pen/sol-pen";
import { CotizacionPage } from "../pages/cotizacion/cotizacion";
import { TrasladosCttdPage } from "../pages/traslados-cttd/traslados-cttd";
import { SolTrasPage } from "../pages/sol-tras/sol-tras";
import { VehiculoPage } from "../pages/vehiculo/vehiculo";
import { SendContizacionPage } from "../pages/send-contizacion/send-contizacion";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomeTPage,
    HomeCPage,
    SignupPage,
    ForgotPage,
    CrearSolPage,
    SolPenPage,
    CotizacionPage,
    TrasladosCttdPage,
    SolTrasPage,
    VehiculoPage,
    SendContizacionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomeTPage,
    HomeCPage,
    SignupPage,
    ForgotPage,
    CrearSolPage,
    SolPenPage,
    CotizacionPage,
    TrasladosCttdPage,
    SolTrasPage,
    VehiculoPage,
    SendContizacionPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
