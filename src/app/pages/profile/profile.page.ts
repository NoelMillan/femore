import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from './../../services/page.service';
import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  users: Observable<User[]>;
  user: User[];
  editable = true;
  pressed = false;
  disabled = true;
  usuario: User[];

  constructor(private userService: UserService, public authService: AuthService, private toastController: ToastController, private pageService: PageService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.pageService.page = "Perfil"
    if(this.activatedRoute.snapshot.paramMap.get('id') != this.authService.getCurrentUser().uid){
      this.router.navigateByUrl("/landing")
    }
    else{
      this.userService.getUsers().subscribe(
        data => this.user = data.filter(data => data.email == this.authService.getCurrentUser().email)
      );
      this.userService.getUsers().subscribe(
        data => this.usuario = data.filter(data => data.email == this.authService.getCurrentUser().email)
      );
    }
  }

  ngOnInit() {
  }

  goReset(){
    this.router.navigateByUrl(`/profile-reset/${this.authService.getCurrentUser().uid}`)
  }

  inputChanges(){
    if(JSON.stringify(this.user) === JSON.stringify(this.usuario)){
      this.disabled = true
    }
    else{
      this.disabled = false
    }
  }

  async toastQ() {
    const toast = await this.toastController.create({
      message: `Ahora puedes editar tu <b>nombre</b>`,
      duration: 1000,
      mode: "ios",
      cssClass: "app-toast"
    });
    toast.present();
    await toast.onDidDismiss();
    this.editable = !this.editable
  }

  async toastCancel() {
    const toast = await this.toastController.create({
      message: 'Los cambios han sido cancelados',
      duration: 1000,
      mode: "ios",
      cssClass: "app-toast"
    });
    toast.present();
    await toast.onDidDismiss();
    this.editable = !this.editable
  }

  async toastComplete() {
    const toast = await this.toastController.create({
      message: 'Los cambios se han realizado con éxito',
      duration: 1000,
      mode: "ios",
      cssClass: "app-toast"
    });
    toast.present();
    await toast.onDidDismiss();
    this.pressed = !this.pressed
  }

  showMessage() {
    this.pressed = !this.pressed
    if(this.editable && this.pressed){
      this.toastController.dismiss()
      .finally(() => {
        this.toastQ();
      })
    }
    else{
      this.toastController.dismiss()
      .finally(() => {
        this.toastCancel();
      })
    }
  }

  showCompleteMessage() {
    this.toastController.dismiss()
    .finally(() => {
      this.toastComplete();
    })
  }

  changeUser(user: User){
    this.userService.updateUser(user)
    .then(t => {this.editable = !this.editable; this.disabled = !this.disabled; this.showCompleteMessage()})
  }

}
