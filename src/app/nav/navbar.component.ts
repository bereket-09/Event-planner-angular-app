import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
    selector:'nav-bar',
    templateUrl:'./navbar.component.html',
    styleUrls: ['./navbar.component.scss']

})

export class NavbarComponent{
    constructor(public auth: AuthService){
    }



}