import { Component } from '@angular/core';
import { format } from '../models/typeDeclaration';

@Component({
  selector: 'app-bill-automation',
  templateUrl: './bill-automation.component.html',
  styleUrls: ['./bill-automation.component.css']
})
export class BillAutomationComponent {
  details: format[] = [];

  itemTemp: string | null = null;
  options: string[] = ['Dates', 'Badam', 'Cashew', 'Walnut', 'Pistachio', 'Figs']

  quantityTemp: number | null = null;
  

  result: number | null = 0;
  price: number = 0;
  discountedAmount: number = 0;
  generate: boolean = false;

  displayDetails() {


    this.itemTemp = null;
    this.quantityTemp = null;
    
    this.generate = true

  }
  checkValue: boolean = false;

  addData() {
    this.details.push({ itemName: this.itemTemp, quantity: this.quantityTemp })

    this.result = 0;

    if (this.quantityTemp != null && this.quantityTemp > 0) {
      this.checkValue = false;
    }
    else {
      this.checkValue = true;
    }

    for (let unique of this.details) {

      if (unique.itemName == 'Dates' && !this.checkValue) {
        this.price = 20;
        if (unique.quantity !== null && this.result !== null) {
          this.result += (this.price * unique.quantity)

        }
      }

      else if (unique.itemName == 'Badam'&& !this.checkValue) {
        this.price = 25;
        if (unique.quantity !== null && this.result !== null) {
          this.result += (this.price * unique.quantity);
        }
      }

      else if (unique.itemName == 'Cashew'&& !this.checkValue) {
        this.price = 30;
        if (unique.quantity !== null && this.result !== null) {
          this.result += (this.price * unique.quantity);
        }
      }

      else if (unique.itemName == 'Walnut'&& !this.checkValue) {
        this.price = 40;
        if (unique.quantity !== null && this.result !== null) {
          this.discountedAmount = (this.price * unique.quantity) * 0.20
          this.result += (this.price * unique.quantity) - this.discountedAmount;
        }
      }

      else if (unique.itemName == 'Pistachio'&& !this.checkValue) {
        this.price = 50;
        if (unique.quantity !== null && this.result !== null) {
          this.discountedAmount = (this.price * unique.quantity) * 0.20
          this.result += (this.price * unique.quantity) - this.discountedAmount;
        }
      }

      else if (unique.itemName == 'Figs'&& !this.checkValue) {
        this.price = 50;
        if (unique.quantity !== null && this.result !== null) {
          this.discountedAmount = (this.price * unique.quantity) * 0.20
          this.result += (this.price * unique.quantity) - this.discountedAmount;
        }
      }

      this.itemTemp = null;
      this.quantityTemp = null;


    }
   
    this.price = 0

    this.itemTemp = null;
    this.quantityTemp = null;
  }

  reset() {
    this.price = 0;
    this.result = 0;
    this.details = [];
    this.generate = false;
  }

}
