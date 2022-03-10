import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  page: string;

  constructor(private router: Router, private authService: AuthService) { }

  goProfile(){
    this.router.navigateByUrl(`/profile/${this.authService.getCurrentUser().uid}`)
  }

  goCenter(){
    this.router.navigateByUrl("/home")
  }
}
