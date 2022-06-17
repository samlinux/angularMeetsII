import { Component, OnInit } from '@angular/core';
import { LoginIIService } from '../service/login-ii.service';

@Component({
  selector: 'app-dashboard-navi',
  templateUrl: './dashboard-navi.component.html',
  styleUrls: ['./dashboard-navi.component.css']
})
export class DashboardNaviComponent implements OnInit {

  PrincipalId:String = '';
  constructor(private loginIIService: LoginIIService) {}

  ngOnInit(): void {
    this.PrincipalId = this.loginIIService.getPrincipalId();
  }

  logout(){
    this.loginIIService.logout();
  }
  
}
