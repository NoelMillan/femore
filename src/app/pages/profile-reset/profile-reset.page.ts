import { ToastController } from '@ionic/angular';
import { PageService } from './../../services/page.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-reset',
  templateUrl: './profile-reset.page.html',
  styleUrls: ['./profile-reset.page.scss'],
})
export class ProfileResetPage implements OnInit {

  newPassword: string = ""
  newPasswordRepeat: string = ""

  constructor(private pageService: PageService, private authService: AuthService, private toastController: ToastController) {
    this.pageService.page = "Perfil"
  }

  ngOnInit() {
    this.authService.getCurrentUser()
  }

  goProfile(){
    this.pageService.goProfile()
  }
  prueba(){
    if(this.newPassword == this.newPasswordRepeat){
      if(this.newPassword == null || this.newPassword == "" || this.newPasswordRepeat == null || this.newPasswordRepeat == ""){
        this.toastController.dismiss()
        .finally(() => {
          this.toastError();
        })
      }
      else{
        if(this.newPassword == this.newPasswordRepeat){
          this.authService.ChangePassword(this.authService.getCurrentUser(), this.newPasswordRepeat)
          this.pageService.goProfile()
          this.newPassword = ""
          this.newPasswordRepeat = ""
        }
      }
    }
    else{
      this.toastController.dismiss()
      .finally(() => {
        this.toastErrorMatch();
      })
    }
  }

    async toastError() {
      const toast = await this.toastController.create({
        message: `All fields are required`,
        duration: 1000,
        mode: "ios",
        cssClass: "app-toast"
      });
      toast.present();
      await toast.onDidDismiss();
    }
  
    async toastErrorMatch() {
      const toast = await this.toastController.create({
        message: `Passwords does not match`,
        duration: 1000,
        mode: "ios",
        cssClass: "app-toast"
      });
      toast.present();
      await toast.onDidDismiss();
    }

}
