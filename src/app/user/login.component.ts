import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";



@Component({
    templateUrl:'./login.component.html',
})

export class LoginComponent {
userName!:string;
password!:string;
    constructor(private authService:AuthService,private route:Router) {

    } 

    login(formValue:any){
    console.log("🚀 LoginComponent ~ login ~ formValue", formValue)

        this.authService.loginUser(formValue.username,formValue.password)
        this.route.navigate(['events'])

    }

    cancelLogin(){
        this.route.navigate(['events'])
    }

}
