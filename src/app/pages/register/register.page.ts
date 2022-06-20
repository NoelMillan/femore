import { ToastController } from '@ionic/angular';
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
  isShowed: boolean;

  constructor(private authService: AuthService, private router: Router, private userService: UserService, private toastController: ToastController) { }

  ngOnInit() {
  }

  async register(){
    if(this.firstName == null || this.firstName == "" || this.lastName == null || this.lastName == ""){
      this.showMessage2()
    }
    else{
      const connectionSuccess = await this.authService.register(this.email, this.password)

      if(connectionSuccess){
        this.addUser()
        this.goLogin()
      }
      else{
        this.showMessage()
      }
    }
  }

  // 

  async toast() {
    const toast = await this.toastController.create({
      message: 'Email o contraseña incorrectas, inténtelo de nuevo',
      duration: 1300,
      mode: "ios",
      cssClass: "app-toast"
    });
    toast.present();
    await toast.onDidDismiss();
    this.isShowed = !this.isShowed
  }

  async toast2() {
    const toast = await this.toastController.create({
      message: 'Todos los campos son necesarios, inténtelo de nuevo',
      duration: 1300,
      mode: "ios",
      cssClass: "app-toast"
    });
    toast.present();
    await toast.onDidDismiss();
    this.isShowed = !this.isShowed
  }

  showMessage() {
    this.toastController.dismiss()
        .finally(() => {
          this.isShowed = !this.isShowed;
          this.toast();
        })
  }

  showMessage2() {
    this.toastController.dismiss()
        .finally(() => {
          this.isShowed = !this.isShowed;
          this.toast2();
        })
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
      centersVisited: 0,
      reviews: [],
      isActive: true
    }
    this.userService.addUser(user);
    }

}
