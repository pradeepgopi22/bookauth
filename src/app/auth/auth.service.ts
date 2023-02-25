import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/app";
import "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentToken : string;
  constructor(private route : Router) { }


RegisterUser(email: string, password: string){
  firebase.auth().createUserWithEmailAndPassword(email,password)
  .then(resp=>{
    console.log(resp)
  })
  .catch(error=>{
    console.log(error)
  })
}

loginForm(email: string, password: string){
  firebase.auth().SigninWithWmailAndPassword(email,password)
  .then(resp=>{
    this.getToken();
    this.route.navigate(['/book'])


    // console.log(resp)
  })
  .catch(error=>{
    console.log(error)
  })
}


getToken(){
  firebase.auth().currentUser.getToken()
  .then(
    (token: string)=>{
      this.currentToken = token
    }
  );
  return this.currentToken;
}


isAuthenticated(){
  return this.currentToken !=null ? true : false
}


logout(){
  this.route.navigate(['/login']);
  firebase.auth().signOut();
  this.currentToken = null;
}

}
