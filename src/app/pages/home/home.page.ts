import { CenterService } from './../../services/center.service';
import { Router } from '@angular/router';
import { PageService } from './../../services/page.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { IonRouterOutlet } from '@ionic/angular';

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
  openModal: boolean = false;
  center: any;

  option = {
    initialSlide: 1,
    slidesPerView: 1.25,
    centeredSlides: true,
  };

  slideOpts = {
    speed: 400,
    loop: true
  };

  locations = [
    {name: "Málaga"},
    {name: "Sevilla"},
    {name: "Granada"},
    {name: "Almería"},
  ]

  centersChanged = []

  constructor(private pageService: PageService, private router: Router, private centerService: CenterService, public routerOutlet: IonRouterOutlet) {
    this.pageService.page = "Centros"
    this.centerService.getCenters().subscribe(data => this.centersChanged = data)
    this.locationChanged()
  }

  ngOnInit() {}

  locationChanged(){
    this.centerService.getCenters().subscribe(data => this.centersChanged = data.filter(data => data.location === this.locationPressed))
  }

  goPlan(center: string){
    this.router.navigateByUrl(`/interactive-maps/${center}`)
  }

  showInfo(center: {}){
    console.log(center);
    this.center = center;
    this.openModal = true;
  }

}
