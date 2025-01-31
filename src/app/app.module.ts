import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillAutomationComponent } from './bill-automation/bill-automation.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SelectedImageService } from './selected-image.service';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BillAutomationComponent,
    ProductDetailsComponent,
    ProductListComponent,
    NavbarComponent,
    OrderSummaryComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SelectedImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
