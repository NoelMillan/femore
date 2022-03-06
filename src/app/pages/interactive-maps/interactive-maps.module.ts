import { FooterBarComponent } from 'src/app/components/footer-bar/footer-bar.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InteractiveMapsPageRoutingModule } from './interactive-maps-routing.module';

import { InteractiveMapsPage } from './interactive-maps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteractiveMapsPageRoutingModule
  ],
  declarations: [InteractiveMapsPage, NavBarComponent, FooterBarComponent]
})
export class InteractiveMapsPageModule {}
