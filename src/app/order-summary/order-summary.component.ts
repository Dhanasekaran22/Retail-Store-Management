import { Component, OnInit } from '@angular/core';
import { ProductSummaryService } from '../product-summary.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit{
  productData: any;

  constructor(private summaryService:ProductSummaryService){}

  ngOnInit(){
    this.productData=this.summaryService.getProductData();
  }

}
