import { CenterService } from './../../services/center.service';
import { Router } from '@angular/router';
import { PageService } from './../../services/page.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  centerPressed: boolean = false;
  locationPressed = "Málaga";
  rate: any;
  lastRate: any;

  option = {
    initialSlide: 1,
    slidesPerView: 1.25,
    centeredSlides: true,
    loop: true,
  };

  locations = [
    {name: "Málaga"},
    {name: "Sevilla"},
    {name: "Granada"},
    {name: "Almería"},
  ]

  centers = []

  centersChanged = []

  constructor(private pageService: PageService, private router: Router, private centerService: CenterService) {
    this.locationChanged()
    this.pageService.page = "Centros"
    this.centers = this.centerService.centers
  }

  ngOnInit() {
  }

  locationChanged(){
    this.centersChanged = this.centerService.centers.filter(center => center.location === this.locationPressed);
  }

  goPlan(center: string){
    this.router.navigateByUrl(`/interactive-maps/${center}`)
  }

}
