import { Component, OnInit } from '@angular/core';
import { products } from '../models/products.model';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {

   watchesArray : any;
  
  constructor(private watchServicesObj:WatchService){};

  ngOnInit(){
    this.watchesArray = this.watchServicesObj.getwatchdetails();
  }

}
