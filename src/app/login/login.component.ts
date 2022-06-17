import { Component, OnInit } from '@angular/core';
import { LoginIIService } from '../service/login-ii.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(
    private LoginServiceII: LoginIIService,
    private router: Router
  ) {

  }

  ngOnInit(): void {}

  async loginII() {
    let r = await this.LoginServiceII.loginII();
    if(r){
      this.router.navigateByUrl('/dashboard');
    }
  }
}
