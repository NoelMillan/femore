import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  termsChecked: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.email, this.password)
      .then(
        () => /*this.router.navigateByUrl('/list'),*/console.log("ok"),
        error => {
          console.log("error")
        }
      )
  }

  goLogin(){
    this.router.navigateByUrl("/login")
  }

}
