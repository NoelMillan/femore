import { PageService } from './../../services/page.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService, private router: Router, private pageService: PageService) { }

  ngOnInit() {
  }

  async login(){
    const connectionSuccess = await this.authService.login(this.email, this.password)

    if (connectionSuccess){
      this.goProfile()
      console.log("ok")
    } else{
      console.log("error")
    }
  }

  goProfile(){
    this.pageService.goProfile()
  }

  goRegister(){
    this.router.navigateByUrl("/register")
  }

  goRecover(){
    this.router.navigateByUrl("/recover")
  }

}
