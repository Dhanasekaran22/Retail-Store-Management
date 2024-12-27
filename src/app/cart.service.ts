import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems:any[]=[];
  constructor() { }

  setCartData(cartDetails:any){
    this.cartItems.push(cartDetails);
  }

  getCartData(){
    return this.cartItems;
  }

  clearCart(){
    this.cartItems=[];
  }
}
