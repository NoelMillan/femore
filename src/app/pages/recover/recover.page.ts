import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {

  email: string;
  isShowed: boolean;

  constructor(private router: Router, private authService: AuthService, public toastController: ToastController) { }

  ngOnInit() {
  }

  async toast() {
    const toast = await this.toastController.create({
      message: 'We have sent you an email.',
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

  goLogin(){
    this.router.navigateByUrl("/login")
  }

  goRegister(){
    this.router.navigateByUrl("/register")
  }

  resetPassword(){
    this.authService.resetPassword(this.email)
  }
}
