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

  constructor(private pageService: PageService) {
    this.pageService.page = "Perfil"
  }

  ngOnInit() {
  }

  goProfile(){
    this.pageService.goProfile()
  }
  /*prueba(){
    if(this.newPassword == this.newPasswordRepeat){
      if(this.newPassword == null || this.newPassword == "" || this.newPasswordRepeat == null || this.newPasswordRepeat == ""){
        console.log("no puedeshacer nada")
      }
      else{
        if(this.newPassword == this.newPasswordRepeat){
          console.log("ok")
        }
      }
    }
    else{
      console.log("no son iguales")
    }
  }*/

}
