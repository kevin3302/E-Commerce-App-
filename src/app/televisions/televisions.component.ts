import { Component, OnInit } from '@angular/core';
import { products } from '../models/products.model';
import { TelevisionService } from '../television.service';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {

 televisionsArray : any;

 constructor(private televisionServiceObj:TelevisionService){};

 ngOnInit(){
   this.televisionsArray = this.televisionServiceObj.gettvdetails();
 }

}
