import { Component, OnInit } from '@angular/core';
import  firebase  from "firebase/app";
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myfirsthttpapp';

  constructor(public _auth:AuthService){}
  ngOnInit(){

    const firebaseConfig = {
      apikey :"AIzaSyC6r6_G4x3fpQx276FDrmhnmzs88timuCE",
      authDomain:"  "
    };

    firebase.initializing(firebaseConfig)
  }
}
