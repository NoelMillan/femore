import { UserService } from './../../services/user.service';
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

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  async register(){
    const connectionSuccess = await this.authService.register(this.email, this.password)

    if (connectionSuccess){
      this.addUser()
      this.goLogin();
    } else{
      console.log("error")
    }
  }

  goLogin(){
    this.router.navigateByUrl("/login")
  }

  addUser() {
    const user = {
      userId: this.authService.getCurrentUser().uid,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      centersVisited: 0,
      reviews: 0,
    }
    this.userService.addUser(user);
    }

}
