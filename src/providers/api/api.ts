import { Injectable } from '@angular/core';
import { User } from "../../models/user";

@Injectable()
export class ApiProvider {

  constructor() {

  }

  login(user: User){
         localStorage.setItem('user',JSON.stringify({email: user.email, nombre: "user.nombre",rol:user.rol,image: user.imagen}));

  }
  getUser() {
    var user = localStorage.getItem('user');
    return user ? JSON.parse(user): false;
  }
}
