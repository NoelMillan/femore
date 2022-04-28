import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, User, signInWithEmailAndPassword, signOut, updatePassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private toastController: ToastController) { }

  login(email:string, password: string): Promise<boolean>{
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(
        data => {
          return true;
        },
        error => {
          console.error(error)
          return false
        }
      )
  }

  getCurrentUser(): User{
    return getAuth().currentUser
  }

  logout(){
    signOut(this.auth);
  }

  register(email:string, password: string): Promise<boolean>{
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(
        () => true,
        error => {
          console.error(error)
          return false
        }
      )
  }

  ChangePassword(user: User, newPassword: string){
    updatePassword(user, newPassword).then(() => {
      this.toastController.dismiss()
      .finally(() => {
        this.toastChangedPass();
      })
    }).catch(() => {
      this.toastController.dismiss()
      .finally(() => {
        this.toastErrorChangedPass();
      })
    })
  }

  resetPassword(email: string): Promise<void>{
    return sendPasswordResetEmail(this.auth, email);
  }

  // Toasts de cambio de contraseña

  async toastChangedPass() {
    const toast = await this.toastController.create({
      message: `Your <b>password</b> has been changed`,
      duration: 1000,
      mode: "ios",
      cssClass: "app-toast"
    });
    toast.present();
    await toast.onDidDismiss();
  }

  async toastErrorChangedPass() {
    const toast = await this.toastController.create({
      message: `A problem has occurred`,
      duration: 1000,
      mode: "ios",
      cssClass: "app-toast"
    });
    toast.present();
    await toast.onDidDismiss();
  }
}
