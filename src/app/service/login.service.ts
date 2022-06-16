import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(email:string, password:string){
    console.log(`call the login-service with: email: ${email}, password: ${password}`);
    this.router.navigate(['dashboard']);
   //return true;
  }
}
