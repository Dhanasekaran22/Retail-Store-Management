import { Component, OnInit} from '@angular/core';
import { SelectedImageService } from '../selected-image.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  
imageDetail:any;

constructor(private imageService:SelectedImageService){}

ngOnInit():void{
  this.imageDetail=this.imageService.getImageDetails();  
}

}
