import { PageService } from './../../services/page.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  page: string;

  constructor(public authService: AuthService, private router: Router, private pageService: PageService) {
    this.page = this.pageService.page
  }

  ngOnInit() {}
  
  logout(){
    this.authService.logout();
  }

  goProfile(){
    this.pageService.goProfile("Perfil");
  }

  goCenter(){
    this.pageService.goCenter("Centros");
  }

}
