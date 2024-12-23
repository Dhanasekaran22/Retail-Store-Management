import { Component } from '@angular/core';
import { SelectedImageService } from '../selected-image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  imageDetails:{imageSource:string,name:string,priceDetails:string}[]=[
    {imageSource:'assets/images/AlmondUSA-Badam.jpg',name:'Medjoul Jordan Dates',priceDetails:'From Rs. 475.00' },
    {imageSource:"assets/images/Chile_Walnut_Without_Shell.png", name:"Chile Walnut", priceDetails:'From Rs. 548.00'},
    {imageSource:'assets/images/AlmondUSA-Badam.jpg',name:'USA Almonds',priceDetails:'From Rs. 398.00'},
    {imageSource:"assets/images/PremiumIranianPistachio-PistaNo1.jpg",name:"Iranian Pistachio",priceDetails:'From Rs. 268.00'},
    {imageSource:'assets/images/CashewNutPlainW-180.jpg',name:'Cashew Plain',priceDetails:'From Rs. 169.00'},
    {imageSource:'assets/images/SuperPremiumAfghanFigs_Anjeer.jpg', name:"Afghan Anjeer Figs",priceDetails:'From Rs. 470.00'}

  ];


  constructor(private imageService:SelectedImageService,private router:Router){}

  onImageClick(imageDetail:any){
    
    this.imageService.setImageDetails(imageDetail);
    this.router.navigate(['/image-details']);
  }
}
