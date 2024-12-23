import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedImageService {
  imageDetails:{imageSource:string,name:string,priceDetails:string} |null=null;
  constructor() { }

  setImageDetails(image:{imageSource:string,name:string,priceDetails:string}){
    this.imageDetails=image;
  }

  getImageDetails(){
    return this.imageDetails;
  }
}
