import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
    this.authService.logout()
  }

  ngOnInit() {
  }

  goLogin(){
    this.router.navigateByUrl("/login")
  }

}
