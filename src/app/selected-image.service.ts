import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedImageService {
  imageDetails:any ;
  constructor() { }

  setImageDetails(image:any){
    this.imageDetails=image;
  }

  getImageDetails(){
    return this.imageDetails;
  }
}
