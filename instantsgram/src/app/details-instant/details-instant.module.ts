import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsInstantPageRoutingModule } from './details-instant-routing.module';

import { DetailsInstantPage } from './details-instant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsInstantPageRoutingModule
  ],
  declarations: [DetailsInstantPage]
})
export class DetailsInstantPageModule {}
