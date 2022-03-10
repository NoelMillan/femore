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

  constructor(private userService: UserService, public authService: AuthService, private pageService: PageService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.pageService.page = "Perfil"
    if(this.activatedRoute.snapshot.paramMap.get('id') != this.authService.getCurrentUser().uid){
      this.router.navigateByUrl("/landing")
    }
    else{
      this.userService.getUsers().subscribe(
        data => this.user = data.filter(data => data.email == this.authService.getCurrentUser().email)
      );
    }
  }

  ngOnInit() {
  }

  goReset(){
    this.router.navigateByUrl(`/profile-reset/${this.authService.getCurrentUser().uid}`)
  }

}
