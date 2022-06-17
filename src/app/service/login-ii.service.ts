import { Injectable } from '@angular/core';
import { AuthClient } from "@dfinity/auth-client";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginIIService {

  constructor(private router:Router) { }

  PrincipalId: String = '';

  /**
   * function is used by the route guard
   * @returns 
   */
  async userIsLoggedIn():Promise<boolean> {
    const authClient = await AuthClient.create();
    if (await authClient.isAuthenticated()) {
      this.PrincipalId = await authClient.getIdentity().getPrincipal().toText();
      console.log('Check userIsLoggedIn: true')
      return true;
    } else {
      console.log('Check userIsLoggedIn: false then redirect to /login')
      this.router.navigateByUrl('/login');
      return false;
    }
  }

  /**
   * function is used for the login
   * @returns 
   */
  async loginII():Promise<boolean> {
    const authClient = await AuthClient.create();

    if (await authClient.isAuthenticated()) {
      this.PrincipalId = authClient.getIdentity().getPrincipal().toText();

      this.router.navigate(['dashboard']);
      return new Promise((resolve) => {
        return resolve(true);
      });
    } 
    else {
      //console.log('NOT authenticated');
     
      // Find out which URL should be used for login.
      const iiUrl = 'http://localhost:8000/?canisterId=rwlgt-iiaaa-aaaaa-aaaaa-cai';
  
      // Call authClient.login(...) to login with Internet Identity. This will open a new tab
      // with the login prompt. The code has to wait for the login process to complete.
      // We can either use the callback functions directly or wrap in a promise.
      return await new Promise((resolve, reject) => {
        authClient.login({
          identityProvider: iiUrl,
          onSuccess: async () => {
            let principalId = await authClient.getIdentity().getPrincipal()
            //console.log('autenticated as '+ principalId.toText());
            this.PrincipalId = principalId.toText();
            this.router.navigate(['dashboard']);
            return resolve(true);
          },
          onError: async () => {
            return resolve(false);
          }
       });
      })
    }
  }

  /**
   * delivers the current II principal ID 
   * @returns 
   */
  getPrincipalId():String{
    return this.PrincipalId
  }

  /**
   * function is used for the logout
   */
  logout(){
    this.router.navigate(['login']);
    localStorage.removeItem('ic-delegation');
    localStorage.removeItem('ic-identity');
  }
}
