import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  currentUser!:UserModel

  loginUser(userName:string, password:string){
    this.currentUser={
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        username: userName
  }
}

isAuthenticated(){
  return !!this.currentUser
}

}
