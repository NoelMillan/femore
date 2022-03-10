import { ToastController } from '@ionic/angular';
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
  isShowed: boolean;

  constructor(public authService: AuthService, private router: Router, private pageService: PageService, private toastController: ToastController) { }

  ngOnInit() {
  }

  async login(){
    const connectionSuccess = await this.authService.login(this.email, this.password)

    if (connectionSuccess){
      this.goProfile()
      console.log("ok")
    } else{
      this.showMessage()
    }
  }

  async toast() {
    const toast = await this.toastController.create({
      message: 'Email or password are incorrect, please try again',
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
