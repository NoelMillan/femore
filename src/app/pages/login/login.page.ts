import { UserService } from './../../services/user.service';
import { ToastController } from '@ionic/angular';
import { PageService } from './../../services/page.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";
  isShowed: boolean;

  user: User[];

  constructor(public authService: AuthService, private userService: UserService, private router: Router, private pageService: PageService, private toastController: ToastController) {
    this.userService.getUsers().subscribe(data => this.user = data)
  }

  ngOnInit() {
  }

  async login(){

    if(this.user.filter(data => data.email == this.email).map(user => user.isActive)[0] == true){
      console.log("entra")
      const connectionSuccess = await this.authService.login(this.email, this.password)
      if (connectionSuccess){
        this.goHome()
      } else{
        this.showMessage()
      }
    }
    else{
      this.showMessage2();
    }
  }

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

  showMessage() {
    this.toastController.dismiss()
        .finally(() => {
          this.isShowed = !this.isShowed;
          this.toast();
        })
  }

  async toast2() {
    const toast = await this.toastController.create({
      message: 'Esta cuenta está deshabilitada',
      duration: 1300,
      mode: "ios",
      cssClass: "app-toast"
    });
    toast.present();
    await toast.onDidDismiss();
    this.isShowed = !this.isShowed
  }

  showMessage2() {
    this.toastController.dismiss()
        .finally(() => {
          this.isShowed = !this.isShowed;
          this.toast2();
        })
  }

  goHome(){
    this.pageService.goCenter()
  }

  goRegister(){
    this.router.navigateByUrl("/register")
  }

  goRecover(){
    this.router.navigateByUrl("/recover")
  }

}
