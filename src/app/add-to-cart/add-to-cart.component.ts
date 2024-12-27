import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit{

  constructor(private cart:CartService){}

  
  cartDatas:any;

  ngOnInit(){
    if(this.cartDatas==null){
      this.cartDatas=this.cart.getCartData();
    }
    
  }
  
  

  
  
}
