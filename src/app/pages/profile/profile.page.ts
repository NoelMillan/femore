import { Router } from '@angular/router';
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

  constructor(private userService: UserService, public authService: AuthService, private pageService: PageService, private router: Router) {
    this.userService.getUsers().subscribe(
      data => this.user = data.filter(data => data.email == this.authService.getCurrentUser().email)
    );
    this.pageService.page = "Perfil"
  }

  ngOnInit() {
  }

  goReset(){
    this.router.navigateByUrl("/profile-reset")
  }

}
