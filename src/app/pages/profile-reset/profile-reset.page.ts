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

  constructor(private router: Router, private pageService: PageService) {
    this.pageService.page = "Perfil"
  }

  ngOnInit() {
  }

  goProfile(){
    this.router.navigateByUrl("/profile")
  }

}
