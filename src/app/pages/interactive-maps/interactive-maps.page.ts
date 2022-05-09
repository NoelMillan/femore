import { CenterService } from './../../services/center.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from './../../services/page.service';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-interactive-maps',
  templateUrl: './interactive-maps.page.html',
  styleUrls: ['./interactive-maps.page.scss'],
})
export class InteractiveMapsPage{

  center: any;
  centerName: string;
  map: any;
  loaded: boolean = true;
  mapStyle = [
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#9d3e15"
            },
            {
                "weight": "1"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#fd78ff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#330066"
            },
            {
                "weight": "2"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef

    constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router, private centerService: CenterService) {
    this.pageService.page = "Planos"
    this.centerName = activatedRoute.snapshot.paramMap.get('centerName')
    this.centerService.getCenters().subscribe(data => this.center = data.find(center => this.centerName == center.name))
  }

  ionViewDidEnter(){
    if(this.center){
      this.loaded = false;
      this.showMap()
    }
    else{
      this.loaded = true;
      this.pageService.goCenter()
    }
  }

  showMap(){
    const location = new google.maps.LatLng(this.center.mapLat, this.center.mapLng);
    const options = {
      center: location,
      backgroundColor: 'white',
      enableHighAccuracy: true,
      disableDefaultUI: true,
      styles: this.mapStyle,
      zoom: 17,
      minZoom: 17,
      restriction: {
        latLngBounds: {
          east: this.center.mapEast,
          north: this.center.mapNorth,
          south: this.center.mapSouth,
          west: this.center.mapWest
        },
        strictBounds: true
      }
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options)
  }

  goCenter(){
    this.router.navigateByUrl("/home")
  }

  /*centerName: string;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.pageService.page = "Planos"
    this.centerName = activatedRoute.snapshot.paramMap.get('centerName')
  }

  ngOnInit() {
  }

  goProfile(){
    this.router.navigateByUrl("/home")
  }*/

}
