import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginForm=FormGroup;  
  constructor() { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'email': new FormGroup(null, [Validators.required,Validators.email]),
      'password': new FormGroup(null,[Validators.required,Validators.minLength(8)])
    })
  }

  OnLogin(){
  const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this._auth.loginForm(email,password);
  }


}
