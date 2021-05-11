import { Component, Input } from '@angular/core';
import { products } from '../models/products.model';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {

  @Input() productsObj : products;

}
