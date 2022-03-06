import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteractiveMapsPage } from './interactive-maps.page';

const routes: Routes = [
  {
    path: '',
    component: InteractiveMapsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteractiveMapsPageRoutingModule {}
