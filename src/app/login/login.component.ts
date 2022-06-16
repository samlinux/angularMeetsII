import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { AuthClient } from "@dfinity/auth-client";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private LoginService: LoginService,
    private router: Router
  ) {
    this.form = this.fb.group({
      mandant: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  async login() {
    const val = this.form.value;
    console.log(val);
    this.LoginService.login(val.email, val.password);
  }

  async loginII() {
    const authClient = await AuthClient.create();

    if (await authClient.isAuthenticated()) {
  
      const identity = authClient.getIdentity();
      console.log('authenticated', identity);
      this.router.navigate(['dashboard']);
    } 
    else {
      console.log('NOT authenticated');
     
      // Find out which URL should be used for login.
      const iiUrl = 'http://localhost:8000/?canisterId=rwlgt-iiaaa-aaaaa-aaaaa-cai';
  
      // Call authClient.login(...) to login with Internet Identity. This will open a new tab
      // with the login prompt. The code has to wait for the login process to complete.
      // We can either use the callback functions directly or wrap in a promise.
      await new Promise((resolve, reject) => {
        authClient.login({
          identityProvider: iiUrl,
          onSuccess: async () => {
            let principalId = await authClient.getIdentity().getPrincipal()
            console.log('autenticated as '+ principalId.toText());
            this.router.navigate(['dashboard']);

          },
          onError: reject,
        });
      });
    }

  }

  reset() {
    this.form.reset();
  }
}
