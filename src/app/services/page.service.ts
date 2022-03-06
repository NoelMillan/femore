import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  page: string;

  constructor(private router: Router) { }

  goProfile(page: string){
    this.router.navigateByUrl("/profile")
    this.page = page
  }

  goCenter(page: string){
    this.router.navigateByUrl("/home")
    this.page = page
  }

  goPlan(page: string){
    this.router.navigateByUrl("/home")
    this.page = page
  }
}
