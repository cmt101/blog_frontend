import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";
import { LoginResponse } from '../../types/LoginResponse';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit{
  loginForm: FormGroup;
  token: string = '';
  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('Email'),
      password: new FormControl('Password')
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.loginForm.value);

    this.authService
    .doLogin(this.loginForm.value)
    .subscribe((resp) => {
      this.token = resp.token;
      console.log(this.token);
    });    
  }
}
