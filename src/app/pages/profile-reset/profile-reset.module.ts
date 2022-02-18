import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileResetPageRoutingModule } from './profile-reset-routing.module';

import { ProfileResetPage } from './profile-reset.page';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { FooterBarComponent } from 'src/app/components/footer-bar/footer-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileResetPageRoutingModule
  ],
  declarations: [ProfileResetPage, NavBarComponent, FooterBarComponent]
})
export class ProfileResetPageModule {}
