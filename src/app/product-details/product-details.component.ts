import { Component, OnInit } from '@angular/core';
import { SelectedImageService } from '../selected-image.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  imageDetail: any;

  constructor(private imageService: SelectedImageService) { }

  ngOnInit(): void {
    this.imageDetail = this.imageService.getImageDetails();

    if(this.imageDetail.name=='Medjoul Jordan Dates'){
      console.log("true");
      

    }
    
    
  }

  options: string[] = ['500 GM', '1 KG',]
  weight: string = '250 GM';

  quantity: number = 1;
  countIncrement() {
    if (this.quantity >= 1) {
      this.quantity += 1;
    }

  }

  countDecrement() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }



  clickWishList = false;
  changeWishlist(){
    this.clickWishList=!this.clickWishList;
  }


  
  

}
