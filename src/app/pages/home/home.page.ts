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

  centers = [
    {location: "Málaga", name: "Centro Comercial Rosaleda", img: "../../../assets/images/rosaleda.jpg"},
    {location: "Málaga", name: "Larios Centro", img: "../../../assets/images/larios.jpg"},
    {location: "Málaga", name: "María Zambrano", img: "../../../assets/images/mariazam.jpg"},
    {location: "Málaga", name: "Málaga Plaza", img: "../../../assets/images/malagaplaza.jpg"},
    {location: "Sevilla", name: "Nervión Plaza", img: "../../../assets/images/nervionplaza.jpg"},
    {location: "Sevilla", name: "Centro Comercial Torre Sevilla", img: "../../../assets/images/torresevilla.jpg"},
    {location: "Sevilla", name: "Centro Comercial Los Arcos", img: "../../../assets/images/losarcos.jpg"},
    {location: "Sevilla", name: "Plaza de Armas", img: "../../../assets/images/plazalasarmas.jpg"},
    {location: "Granada", name: "Serrallo Plaza", img: "../../../assets/images/serrallo.jpg"},
    {location: "Granada", name: "Centro Comercial Neptuno", img: "../../../assets/images/neptuno.jpg"},
    {location: "Granada", name: "Centro Comercial Nevada", img: "../../../assets/images/nevada.jpg"},
    {location: "Almería", name: "Centro Comercial Torrecárdenas", img: "../../../assets/images/torrecardenas.jpg"},
    {location: "Almería", name: "Centro Comercial Mediterráneo", img: "../../../assets/images/mediterraneo.jpg"},
    {location: "Almería", name: "Centro Comercial Oliveros", img: "../../../assets/images/olivero.jpg"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
