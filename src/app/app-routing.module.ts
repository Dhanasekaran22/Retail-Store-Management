import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { SelectedImageService } from './selected-image.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductSummaryService } from './product-summary.service';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'image-details',component:ProductDetailsComponent},
  {path:'order-summary',component:OrderSummaryComponent},
  {path:'add-to-cart',component:AddToCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
