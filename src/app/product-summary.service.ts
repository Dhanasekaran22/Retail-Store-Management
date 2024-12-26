import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductSummaryService {
  private productData:any;
  constructor() { }

  setProductData(data:any){
    this.productData=data;
  }

  getProductData(){
    return this.productData;
  }
}
