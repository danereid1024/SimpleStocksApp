import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ItemReorderEventDetail } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { StockListComponent } from '../stock-list/stock-list.component';
import { StockSearchComponent } from '../stock-search/stock-search.component';

import { HomePageRoutingModule } from './home-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, StockListComponent, StockSearchComponent]
})
export class HomePageModule {}
