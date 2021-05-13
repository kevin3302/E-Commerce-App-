import { Component, Input, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
import { products } from '../models/products.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{

  mobilesArray : any;

  constructor(private mobileServicesObj:MobileService){};
  ngOnInit(){
    this.mobilesArray = this.mobileServicesObj.getmobiledetais();
  }

}
