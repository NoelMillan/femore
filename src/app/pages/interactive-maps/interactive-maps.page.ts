import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from './../../services/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive-maps',
  templateUrl: './interactive-maps.page.html',
  styleUrls: ['./interactive-maps.page.scss'],
})
export class InteractiveMapsPage implements OnInit {

  centerName: string;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.pageService.page = "Planos"
    this.centerName = activatedRoute.snapshot.paramMap.get('centerName')
  }

  ngOnInit() {
  }

  goProfile(){
    this.router.navigateByUrl("/home")
  }

}
