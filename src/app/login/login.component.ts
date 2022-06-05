import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private LoginService: LoginService
    ) { 

      this.form = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

  ngOnInit(): void {
  }

  login(){
    const val = this.form.value;
    console.log(val)
    this.LoginService.login(val.email, val.password);
  }

  reset(){
    this.form.reset();
  }

}
