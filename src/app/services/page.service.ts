import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  page: string;

  constructor(private router: Router) { }

  goProfile(){
    this.router.navigateByUrl("/profile")
  }

  goCenter(){
    this.router.navigateByUrl("/home")
  }
}
