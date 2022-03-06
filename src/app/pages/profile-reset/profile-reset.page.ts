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

  constructor(private userService: UserService, public authService: AuthService) {
  }

  ngOnInit() {
  }

}
