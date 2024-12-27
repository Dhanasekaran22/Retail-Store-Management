import { Component, OnInit } from '@angular/core';
import { SelectedImageService } from '../selected-image.service';
import { ProductSummaryService } from '../product-summary.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  imageDetail: any;
  individualProductPrice: number | null = null;
  options: string[] = ['500 GM', '1 KG',]
  weight: string = '250 GM';
  quantity: number = 1;

  productPricing: { [nutsName: string]: { [nutsQuantity: string]: number } } = {
    'Medjoul Jordan Dates': {
      '250 GM': 450,
      '500 GM': 950,
      '1 KG': 1900
    },

    'Chile Walnut': {
      '250 GM': 548,
      '500 GM': 1095,
      '1 KG': 2190
    },

    'USA Almonds': {
      '250 GM': 995,
      '500 GM': 1990,
      '1 KG': 3980
    },

    'Iranian Pistachio': {
      '250 GM': 470,
      '500 GM': 940,
      '1 KG': 1880
    },

    'Cashew Plain': {
      '250 GM': 425,
      '500 GM': 845,
      '1 KG': 1690
    },

    'Afghan Anjeer Figs': {
      '250 GM': 595,
      '500 GM': 1190,
      '1 KG': 2380
    },
  }

  constructor(
    private imageService: SelectedImageService,
    private router: Router,
    private summaryService: ProductSummaryService,
    private cartService:CartService
  ) { }

  ngOnInit(): void {
    this.imageDetail = this.imageService.getImageDetails();
    this.calculateProductPrice();
    
  }

  calculateProductPrice() {  
    if (this.productPricing[this.imageDetail.name]) {
      this.individualProductPrice = this.productPricing[this.imageDetail.name][this.weight] * this.quantity
    }
  }


  countIncrement() {
    if (this.quantity >= 1) {
      this.quantity += 1;
      this.calculateProductPrice()
    }

  }

  countDecrement() {
    if (this.quantity > 1) {
      this.quantity -= 1;
      this.calculateProductPrice();
    }
  }



  clickWishList = false;
  changeWishlist() {
    this.clickWishList = !this.clickWishList;
  }


  buyNow() {
    const productData = {
      image: this.imageDetail.imageSource,
      name: this.imageDetail.name,
      price: this.individualProductPrice,
      weight: this.weight,
      quantity: this.quantity
    };
    
    this.summaryService.setProductData(productData);

    this.router.navigate(['/order-summary']);

  }

  allCartItems:any[]=[];
  addToCart(){
    const cartDetails={
      image: this.imageDetail.imageSource,
      name: this.imageDetail.name,
      price: this.individualProductPrice,
      weight: this.weight,
      quantity: this.quantity
    }

    
    this.cartService.setCartData(cartDetails);
    this.router.navigate(['/add-to-cart'])
  }




}
