import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(email:string, password:string){
    console.log(`call the login-service with: email: ${email}, password: ${password}`);
   return true;
  }
}
