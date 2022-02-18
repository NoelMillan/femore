import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { FooterBarComponent } from 'src/app/components/footer-bar/footer-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage, NavBarComponent, FooterBarComponent]
})
export class ProfilePageModule {}
