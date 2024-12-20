import { Component } from '@angular/core';
import { format } from '../models/typeDeclaration';

@Component({
  selector: 'app-bill-automation',
  templateUrl: './bill-automation.component.html',
  styleUrls: ['./bill-automation.component.css']
})
export class BillAutomationComponent {
  details:format[]= [];
  itemIdTemp: number | null = null;
  quantityTemp: number | null = null;
  yOrN: string | null = null;

  result: number | null = 0;
  price: number = 0;
  discountedAmount: number = 0;
  generate:boolean=false;

  displayDetails() {
    

    this.itemIdTemp = null;
    this.quantityTemp = null;
    this.yOrN = null;
    this.generate=true

  }

  addData() {
    this.details.push({ itemId: this.itemIdTemp, quantity: this.quantityTemp, addItem: this.yOrN })

    this.result = 0;

    for (let unique of this.details) {

      if (unique.itemId == 5001) {
        this.price = 20;
        if (unique.quantity !== null && this.result !== null) {
          this.result += (this.price * unique.quantity)

        }
      }

      else if (unique.itemId == 5002 ) {
        this.price = 25;
        if (unique.quantity !== null && this.result !== null) {
          this.result += (this.price * unique.quantity);
        }
      }

      else if (unique.itemId == 5003 ) {
        this.price = 30;
        if (unique.quantity !== null && this.result !== null) {
          this.result += (this.price * unique.quantity);
        }
      }

      else if (unique.itemId == 5004 ) {
        this.price = 40;
        if (unique.quantity !== null && this.result !== null) {
          this.discountedAmount = (this.price * unique.quantity) * 0.20
          this.result += (this.price * unique.quantity) - this.discountedAmount;
        }
      }

      else if (unique.itemId == 5005 ) {
        this.price = 50;
        if (unique.quantity !== null && this.result !== null) {
          this.discountedAmount = (this.price * unique.quantity) * 0.20
          this.result += (this.price * unique.quantity) - this.discountedAmount;
        }
      }
      this.itemIdTemp = null;
      this.quantityTemp = null;
      this.yOrN = null;


    }
    this.price = 0

    this.itemIdTemp = null;
    this.quantityTemp = null;
    this.yOrN = null;
  }

  reset() {
    this.price = 0;
    this.result = 0;
    this.details = [];
    this.generate=false;
  }

}
