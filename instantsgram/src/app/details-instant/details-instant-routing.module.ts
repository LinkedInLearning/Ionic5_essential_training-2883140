import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsInstantPage } from './details-instant.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsInstantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsInstantPageRoutingModule {}
