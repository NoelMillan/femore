import { Center } from './../../models/center';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { CenterService } from './../../services/center.service';
import { Router } from '@angular/router';
import { PageService } from './../../services/page.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { IonRouterOutlet, ToastController } from '@ionic/angular';
import { User } from 'src/app/models/user';

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
  openReviewModal: boolean = false;
  exists: boolean = false;
  review = ""
  reviewRate = ""
  reviewRateNumber: number;

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

  user: User[] = []

  centersChanged = []

  constructor(private pageService: PageService, private auth: AuthService, private toastController: ToastController, private userService: UserService, private router: Router, private centerService: CenterService, public routerOutlet: IonRouterOutlet) {
    this.pageService.page = "Centros"
    this.centerService.getCenters().subscribe(data => this.centersChanged = data)
    this.locationChanged()
    if(this.auth.getCurrentUser()){
      this.userService.getUsers().subscribe(data => this.user = data.filter(data => data.email == this.auth.getCurrentUser().email))
    }
  }

  ngOnInit() {
  }

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

  check(user: User){
    if(user.reviews.map(data => data.center).filter(data => data == this.center.name).length!=0){
      this.exists=true;
      this.review=user.reviews.filter(data => data.center == this.center.name).map(data => data.review).toString()
      this.reviewRate=user.reviews.filter(data => data.center == this.center.name).map(data => data.rate).toString()
      console.log("existe")
    }
    else{
      this.exists=false;
      this.review=""
      this.reviewRate=""
      console.log("no existe")
    }
  }
  
  addReview(user: User, review: string, rate: number, center: string, centerId: string){
    let number = parseFloat(this.reviewRate)
    if(isNaN(number) || this.review=="" || this.reviewRate==""){
      this.showMessageErrorString()
      console.log("error1")
    }
    else if(number>5||number<1){
      this.showMessageErrorMaxNumber()
      console.log("error2")
    }
    else{
      console.log("funciona")
      this.userService.addReview(user, review, rate, center, centerId).then(t => {this.showMessage(), this.review="", this.reviewRate=""})
    }
  }

  // MENSAJES TOAST

  async toastComplete() {
    const toast = await this.toastController.create({
      message: 'Tu reseña ha sido publicada correctamente',
      duration: 1000,
      mode: "ios",
      cssClass: "app-toast"
    });
    toast.present();
    await toast.onDidDismiss();
  }

  showMessage() {
    this.toastController.dismiss()
    .finally(() => {
      this.toastComplete();
    })
  }

  async toastErrorString() {
    const toast = await this.toastController.create({
      message: 'Porfavor, introduzca correctamente los campos',
      duration: 1000,
      mode: "ios",
      cssClass: "app-toast"
    });
    toast.present();
    await toast.onDidDismiss();
  }

  showMessageErrorString() {
    this.toastController.dismiss()
    .finally(() => {
      this.toastErrorString();
    })
  }

  async toastErrorMaxNumber() {
    const toast = await this.toastController.create({
      message: `La puntuación del centro debe de ser de <b>1 a 5</b>`,
      duration: 1000,
      mode: "ios",
      cssClass: "app-toast"
    });
    toast.present();
    await toast.onDidDismiss();
  }

  showMessageErrorMaxNumber() {
    this.toastController.dismiss()
    .finally(() => {
      this.toastErrorMaxNumber();
    })
  }

  strToNum(){
    this.reviewRateNumber = parseFloat(this.reviewRate)
  }

}
